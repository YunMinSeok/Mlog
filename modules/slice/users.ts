import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface User {
  id: number;
  name: string;
}

//slice 안에 들어갈 내용은 name, init, reducers

//리덕스는 root reducer 객체를 가지고 있는데 이 객체의 key/ value쌍을 slice 라고 한다  요걸 업데이트 하는 reducer 함수가 slice reducer
//immer
export const usersSlice = createSlice({
  name: 'users',
  initialState: [{ id: 1, name: '은지' }] as User[],
  //reducer 안에 여러가지 함수가 들어갈 수 있음. 더하기 빼기 등등.. 그때마다 name 바꿔줄 필요 없음
  reducers: {
    //액션타입은 슬라이스 이름을 접두어로 사용해서 자동 생성 >> 나같은 경우엔 users/addTodo
    addUser: (state, action: PayloadAction<User>) => {
      const { id, name } = action.payload;
      state.push({ id, name });
      // state.push(action.payload);
    },
  },
});

//위에 작성이 끝났다면 액션과 리듀서를 export 해준다.
// export const { addUser } = users.actions;
// export default users.reducer;
const { actions, reducer } = usersSlice;
export const { addUser } = actions;

export default reducer;
