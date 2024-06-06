/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementByAmount } from "./counterSlice"
import { ReduxState } from "../../store";

export const incrementIfOdd =
  (amount: number): ReduxThunkAction<void> =>
  (dispatch, getState) => {
    const currentValue = (getState() as ReduxState).counter.value;
    if (currentValue % 2 !== 0) {
      dispatch(incrementByAmount(amount));
    }
  };
