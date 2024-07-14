import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", userInfo);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", userInfo);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      clearAuthHeader();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    try {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      setAuthHeader(savedToken);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      clearAuthHeader();
      rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;
      return savedToken !== null;
    },
  }
);
