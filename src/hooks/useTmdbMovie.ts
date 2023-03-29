import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/store";
import { getTmdb } from "modules/thunk/tmdb";

type tmdbMovieResult = [any[], boolean, string | boolean];
type useTmdbMovieArg = {
  query?: string;
};
const useTmdbMovie = ({ query }: useTmdbMovieArg): tmdbMovieResult => {
  const { movies, loading, error } = useSelector((state: RootState) => state.tmdbSlice);

  console.log("무비정보가져오기..");
  const dispatch = useDispatch<typeof isAsyncThunkAction>();

  useEffect(() => {
    query ? dispatch(getTmdb({ query })) : dispatch(getTmdb(undefined));
  }, [query, dispatch]);

  return [movies, loading, error];
};

export default useTmdbMovie;
