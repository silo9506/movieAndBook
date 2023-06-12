import { Box } from "@mui/material";
import Cart from "components/molecules/Cart";
import Navbar from "components/molecules/Navbar";
import { cartSliceAction } from "modules/cartSlice";
import naverBookSlice, { naverBookSliceAction } from "modules/naverBookSlice";
import { RootState } from "modules/store";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import BookPage from "./BookPage";
import MoviePage from "./MoviePage";
import { tmdbMovieSliceAction } from "modules/tmdbSlice";

export default function Layout() {
  const { params } = useParams();
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.cartSlice);
  const { cartOpen, cartClose } = cartSliceAction;

  const { changeQuery: changeBQuery, changeStart: changeBStart, setLastPage } = naverBookSliceAction;
  const { changeQuery: changeMQuery, changePage: changeMPage } = tmdbMovieSliceAction;
  const { query: bookQuery } = useSelector((state: RootState) => state.naverBookSlice);
  const { query: movieQuery } = useSelector((state: RootState) => state.tmdbSlice);

  const bookQueryChange = (newQuery: string) => {
    dispatch(changeBQuery(newQuery));
    dispatch(setLastPage(false));
  };
  const bookStartChange = () => {
    dispatch(changeBStart(1));
  };
  const movieQueryChange = (newQuery: string) => {
    dispatch(changeMQuery(newQuery));
  };
  const moviePageChange = () => {
    dispatch(changeMPage(1));
  };

  return (
    <Box>
      <Navbar
        moviePageChange={moviePageChange}
        movieQueryChange={movieQueryChange}
        bookStartChange={bookStartChange}
        bookQueryChange={bookQueryChange}
        params={params}
        cartOpen={cartOpen}
        bookQuery={bookQuery}
        movieQuery={movieQuery}
      />
      <Cart isOpen={isOpen} cartOpen={cartOpen} cartClose={cartClose} />
      <Outlet />
      {params === "books" && <BookPage />}
      {params === "movies" && <MoviePage />}
    </Box>
  );
}
