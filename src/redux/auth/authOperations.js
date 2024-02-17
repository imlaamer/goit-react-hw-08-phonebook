import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiRegisterUser,
  apiLoginUser,
  apiRefreshUser,
  apiLogoutUser,
} from 'services';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkApi) => {
    try {
      const user = await apiRegisterUser(formData);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkApi) => {
    try {
      const user = await apiLoginUser(formData);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().auth;
    if (!token) return thunkApi.rejectWithValue("You don't have a token!"); //
    try {
      const user = await apiRefreshUser(token);
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkApi) => {
    try {
      await apiLogoutUser();
      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
