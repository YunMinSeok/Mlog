import axios from 'axios';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

//사용자 불러오기 임의 코드
export const loadUser = createAsyncThunk(``, async (id, thunkApi) => {
  try {
    const response = await axios.get(`api/users/${id}`);
    return response.data.data;
  } catch (err) {
    return err;
    //or return thunkApi.rejectWithValue(err);
  }
});
interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserState {
  user: User | null;
  loadUserLoading: boolean;
  loadUserDone: boolean;
  loadUserError: any;
}

const initialState: UserState = {
  user: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loadUserLoading = true;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loadUserDone = true;
        state.user = action.payload;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loadUserLoading = false;
        state.loadUserDone = true;
        state.loadUserError = action.payload;
      });
  },
});

const { actions, reducer } = userSlice;

export default reducer;
