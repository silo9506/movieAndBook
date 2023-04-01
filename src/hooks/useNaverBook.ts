import { isAsyncThunkAction } from "@reduxjs/toolkit";
import { getNaverBook, NaverBookParams } from "modules/thunk/naver";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/store";
import axios, { CancelTokenSource } from "axios";

type NaverBookResult = [any[], boolean, string | boolean, number, number];
// type useNaverBookProps = {
//   // start?: number;
//   // query?: string;
// };

const useNaverBook = (): NaverBookResult => {
  const { query, start, books, loading, error, maxPage } = useSelector((state: RootState) => state.naverBookSlice);
  console.log("책정보 가져오기");
  console.log(query);
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

  return [books, loading, error, maxPage, start];
};

export default useNaverBook;
// import { isAsyncThunkAction } from "@reduxjs/toolkit";
// import { getNaverBook } from "modules/thunk/naver";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "modules/store";
// import axios, { CancelTokenSource } from "axios";
// type NaverBookResult = [any[], boolean, string | boolean, number];
// type useNaverBookProps = {
//   query?: string;
//   start?: number;
// };

// const useNaverBook = ({ query = "드래곤볼", start = 1 }: useNaverBookProps): NaverBookResult => {
//   const { books, loading, error, maxPage } = useSelector((state: RootState) => state.naverBookSlice);
//   console.log("책정보 가져오기");
//   const dispatch = useDispatch<typeof isAsyncThunkAction>();

//   useEffect(() => {
//     const cancelTokenSource = axios.CancelToken.source();
//     // const options = { cancelToken: cancelTokenSource.token };

//     dispatch(getNaverBook({ query, start }));

//     return () => {
//       cancelTokenSource.cancel("취소 요청");
//     };
//   }, [query, start, dispatch]);

//   return [books, loading, error, maxPage];
// };

// export default useNaverBook;
