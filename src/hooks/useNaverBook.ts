import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { getNaverBook, NaverBookParams } from "modules/thunk/naver";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/store";
import axios, { CancelTokenSource } from "axios";

type NaverBookResult = [any[], boolean, string | boolean, number, number, boolean];

const useNaverBook = (): NaverBookResult => {
  const { query, start, books, loading, error, maxPage, isLastPage } = useSelector(
    (state: RootState) => state.naverBookSlice
  );

  const dispatch = useDispatch<typeof isAsyncThunkAction>();

  useEffect(() => {
    const cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    if (query) {
      console.log("디스패치함");
      const params: NaverBookParams = { query, start, cancelToken: cancelTokenSource.token };
      dispatch(getNaverBook(params));
    }
    return () => {
      cancelTokenSource.cancel("취소 요청");
    };
  }, [query, start, dispatch]);

  return [books, loading, error, maxPage, start, isLastPage];
};

export default useNaverBook;
