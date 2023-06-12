import MovieCard from "components/atoms/MovieCard";
import useTmdbMovie from "hooks/useTmdbMovie";
import React, { ReactNode } from "react";
import { Container, Stack, Pagination, Card, useTheme } from "@mui/material";
import { tmdbMovieSliceAction } from "modules/tmdbSlice";
import { useDispatch } from "react-redux";
import { Skeleton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
const MoviePage = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));
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

  return (
    <Container>
      {loding &&
        [...Array(10)].map((_, index) => (
          <Card key={index} sx={{ display: "flex", marginY: "16px", height: "250px" }}>
            <Skeleton sx={{ width: "150px" }} variant="rectangular"></Skeleton>
            <Skeleton></Skeleton>
          </Card>
        ))}
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
      {maxPage !== 0 && (
        <Stack spacing={2}>
          <Pagination
            sx={{ margin: "0 auto" }}
            onChange={handleChange}
            count={maxPage}
            shape="rounded"
            size={isLargeScreen ? "large" : "medium"}
            // size={"medium"}
          />
        </Stack>
      )}
    </Container>
  );
};

export default MoviePage;
