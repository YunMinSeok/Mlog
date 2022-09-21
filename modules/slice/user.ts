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

export interface User {
  id: number;
  name: string;
}

export const userSlice = createSlice({
  name: 'users',
  initialState: [{ id: 1, name: '은지' }] as User[],
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const { id, name } = action.payload;
      state.push({ id, name });
    },
  },
});

const { actions, reducer } = userSlice;
export const { addUser } = actions;

export default reducer;
