import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { getNaverBook } from "modules/thunk/naver";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/store";

const useNaverBook = (query = "드래곤볼") => {
  const { books, loading, error, maxPage } = useSelector((state: RootState) => state.naverBookSlice);

  const dispatch = useDispatch<typeof isAsyncThunkAction>();

  console.log(typeof isAsyncThunkAction);
  useEffect(() => {
    dispatch(getNaverBook(query));
  }, [query]);

  return [books, loading, error, maxPage];
};

export default useNaverBook;
