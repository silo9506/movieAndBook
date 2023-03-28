import axios, { AxiosResponse } from "axios";
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

interface params {
  query: string;
  start?: number;
  display?: number;
}

const axiosInstance = axios.create({
  headers: {
    "X-Naver-Client-Id": "XRupn7GoMOzhZZQE_RD6",
    "X-Naver-Client-Secret": "FxfJq0rU7f",
  },
  method: "get",
  baseURL: "https://silo9506-proxy.herokuapp.com/https://openapi.naver.com/v1/search",
});

export const getNaverBook = createAsyncThunk<BooksData, params, { rejectValue: MyKnownError }>(
  "getNaverBook",
  async ({ query, start }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axiosInstance({
        url: "/book.json",
        params: { query, start, display: 40 },
      });
      console.log(response);
      return response.data;
    } catch (err: unknown | any) {
      return rejectWithValue({ errorMessage: err.response?.data });
    }
  }
);
