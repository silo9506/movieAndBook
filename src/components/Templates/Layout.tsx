import { Box } from "@mui/material";
import Cart from "components/molecules/Cart";
import Navbar from "components/molecules/Navbar";
import { cartSliceAction } from "modules/cartSlice";
import { RootState } from "modules/store";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import BookPage from "./BookPage";
import MoviePage from "./MoviePage";
export default function Layout() {
  const { params } = useParams();
  console.log(params);
  const { isOpen } = useSelector((state: RootState) => state.cartSlice);
  const { cartOpen, cartClose } = cartSliceAction;

  return (
    <Box>
      <Navbar params={params} cartOpen={cartOpen} />
      <Cart isOpen={isOpen} cartOpen={cartOpen} cartClose={cartClose} />
      <Outlet />
      {params === "books" && <BookPage />}
      {params === "movies" && <MoviePage />}
    </Box>
  );
}
