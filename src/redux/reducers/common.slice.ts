import { createSlice } from "@reduxjs/toolkit";

export interface ICommonState {
  value: number;
}

const initialState: ICommonState = {
  value: 0,
};

const counterSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
