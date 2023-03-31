import useTmdbMovie from "hooks/useTmdbMovie";
import React from "react";

const MoviePage = () => {
  const [movies, loding, error] = useTmdbMovie({ query: undefined });
  console.log(movies);
  return <div></div>;
};

export default MoviePage;
