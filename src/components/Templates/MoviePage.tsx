import MovieCard from "components/atoms/MovieCard";
import useTmdbMovie from "hooks/useTmdbMovie";
import React, { ReactNode } from "react";
import { Container, Stack, Pagination } from "@mui/material";
import { tmdbMovieSliceAction } from "modules/tmdbSlice";
import { useDispatch } from "react-redux";

const MoviePage = () => {
  const [movies, loding, error, maxPage] = useTmdbMovie();
  const { changePage } = tmdbMovieSliceAction;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePage(value));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(movies);

  return (
    <Container>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
      {maxPage !== 0 && (
        <Stack spacing={2}>
          <Pagination sx={{ margin: "0 auto" }} onChange={handleChange} count={maxPage} shape="rounded" size="large" />
        </Stack>
      )}
    </Container>
  );
};

export default MoviePage;
