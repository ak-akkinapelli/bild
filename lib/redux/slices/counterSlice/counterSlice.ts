/* Core */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment:(state)=>{
      state.value +=1
    },
    decrement:(state)=>{
      state.value -= 1
    },
    //increments value by given payload value
    incrementByAmount:(state,action: PayloadAction<number>)=>{
      state.value += action.payload
    }
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer;
