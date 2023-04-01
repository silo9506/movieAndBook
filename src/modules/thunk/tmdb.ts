import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse, CancelTokenSource, AxiosRequestConfig } from "axios";
interface MyKnownError {
  errorMessage: string;
}

interface movieData {
  page: number;
  results: [any];
  total_pages: number;
  total_results: number;
}
export interface getTmdbProps {
  query: string;
  page: number;
  cancelToken?: CancelTokenSource["token"];
}

const axiosInstance = axios.create({
  baseURL: "https://silo9506-proxy.herokuapp.com/https://api.themoviedb.org/3/",
  params: {
    method: "get",
    api_key: process.env.REACT_APP_TMDB_KEY,
    region: "KR",
    language: "ko",
  },
});

export const getTmdb = createAsyncThunk<movieData, getTmdbProps, { rejectValue: MyKnownError }>(
  "getTmdb",
  async ({ query, page, cancelToken }, { rejectWithValue }) => {
    try {
      const config: AxiosRequestConfig = {
        params: {
          query,
          page,
        },
        url: "search/movie",
        cancelToken,
      };
      const response: AxiosResponse<movieData> = await axiosInstance(config);
      console.log(response);
      return response.data;
    } catch (err: unknown | any) {
      if (axios.isCancel(err)) {
        console.log("요청이 취소되었습니다.", err.response);
      }
      return rejectWithValue({ errorMessage: err.response?.data });
    }
  }
);
