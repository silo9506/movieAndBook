import { Box } from "@mui/material";
import Cart from "components/molecules/Cart";
import Navbar from "components/molecules/Navbar";
import { Toolbar } from "@mui/material";
import { cartSliceAction } from "modules/cartSlice";
import { naverBookSliceAction } from "modules/naverBookSlice";
import { RootState } from "modules/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import BookPage from "./BookPage";
import MoviePage from "./MoviePage";
import { tmdbMovieSliceAction } from "modules/tmdbSlice";
export default function Layout() {
  const { params } = useParams();
  console.log(params);
  const { isOpen } = useSelector((state: RootState) => state.cartSlice);
  const { query: bquery } = useSelector((state: RootState) => state.naverBookSlice);
  const { cartOpen, cartClose } = cartSliceAction;
  const { changeQuery: changeBQuery, changeStart: changeBStart } = naverBookSliceAction;
  const { changeQuery: changeMQuery, changePage: changeMPage } = tmdbMovieSliceAction;
  const dispatch = useDispatch();

  const bookQueryChange = (newQuery: string) => {
    dispatch(changeBQuery(newQuery));
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
      />
      <Cart isOpen={isOpen} cartOpen={cartOpen} cartClose={cartClose} />
      <Outlet />
      {params === "books" && <BookPage />}
      {params === "movies" && <MoviePage />}
    </Box>
  );
}
