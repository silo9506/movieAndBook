import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
  CancelToken,
} from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface BooksData {
  display: number;
  items: any[];
  lastBuildDate: string;
  start: number;
  total: number;
}

interface MyKnownError {
  errorMessage: string;
}

export interface NaverBookParams {
  query: string;
  start?: number;
  cancelToken?: CancelTokenSource["token"];
}

const axiosInstance = axios.create({
  headers: {
    "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
    "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
  },
  method: "get",
  baseURL: "https://silo9506.herokuapp.com/https://openapi.naver.com/v1/search",
});

export const getNaverBook = createAsyncThunk<
  BooksData,
  NaverBookParams,
  {
    rejectValue: MyKnownError;
  }
>(
  "naver/getNaverBook",
  async ({ query, start, cancelToken }, { rejectWithValue }) => {
    try {
      const config: AxiosRequestConfig = {
        params: {
          query,
          start,
          display: 40,
        },
        url: "/book.json",
        cancelToken,
      };

      const response: AxiosResponse<BooksData> = await axiosInstance(config);

      return response.data;
    } catch (err: unknown | any) {
      if (axios.isCancel(err)) {
        console.log("요청이 취소되었습니다.", err.response);
      }

      return rejectWithValue({ errorMessage: err.response?.data });
    }
  }
);
