import axios from "axios";
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

const axiosInstance = axios.create({
  headers: {
    "X-Naver-Client-Id": "XRupn7GoMOzhZZQE_RD6",
    "X-Naver-Client-Secret": "FxfJq0rU7f",
  },
  method: "get",
  baseURL:
    "https://silo9506-proxy.herokuapp.com/https://openapi.naver.com/v1/search",
});

export const getNaverBook = createAsyncThunk<
  BooksData,
  string,
  { rejectValue: MyKnownError }
>("getNaverBook", async (query, { rejectWithValue }) => {
  try {
    const response = await axiosInstance({
      url: "/book.json",
      params: { query, display: 40 },
    });
    return response.data;
  } catch (err: unknown | any) {
    return rejectWithValue({ errorMessage: err.response.data });
  }
});
