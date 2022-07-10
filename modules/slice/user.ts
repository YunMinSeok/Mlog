import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
