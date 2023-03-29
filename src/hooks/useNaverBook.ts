import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { getNaverBook } from "modules/thunk/naver";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/store";
import axios, { CancelTokenSource } from "axios";
type NaverBookResult = [any[], boolean, string | boolean, number];
const useNaverBook = (query = "드래곤볼", start: number): NaverBookResult => {
  const { books, loading, error, maxPage } = useSelector((state: RootState) => state.naverBookSlice);
  console.log("책정보 가져오기");
  const dispatch = useDispatch<typeof isAsyncThunkAction>();

  useEffect(() => {
    dispatch(getNaverBook({ query, start }));
  }, [query, start, dispatch]);

  return [books, loading, error, maxPage];
};

export default useNaverBook;
