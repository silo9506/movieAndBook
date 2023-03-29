import { Box } from "@mui/material";
import Navbar from "components/molecules/Navbar";
import { useParams } from "react-router-dom";
import BookPage from "./BookPage";
import MoviePage from "./MoviePage";
export default function Layout() {
  const { params } = useParams();
  console.log(params);

  return (
    <Box>
      <Navbar params={params} />
      {params === "books" && <BookPage />}
      {/* {params === "movies" && <MoviePage />} */}
    </Box>
  );
}
