import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
interface MyKnownError {
  errorMessage: string;
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

export const getTmdb = createAsyncThunk<any, any, { rejectValue: MyKnownError }>(
  "getTmdb",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await axiosInstance({
        url: "movie/popular",
        params: {
          sort_by: "popularity.desc",
        },
      });
      // return response;
      return response.data;
    } catch (err: unknown | any) {
      return rejectWithValue({ errorMessage: err.response?.data });
    }
  }
);
