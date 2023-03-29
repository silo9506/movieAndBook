import useTmdbMovie from "hooks/useTmdbMovie";
import React from "react";

const MoviePage = () => {
  const [movies, loding, error] = useTmdbMovie({ query: undefined });
  console.log("무비페이지 렌더?");
  console.log(movies);
  return <div></div>;
};

export default MoviePage;
