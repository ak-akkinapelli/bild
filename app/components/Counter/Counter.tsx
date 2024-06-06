"use client";

/* Core */
import { useState, ChangeEvent } from "react";

/* Instruments */
import { useSelector, selectCount, useDispatch, increment, decrement, incrementIfOdd, incrementByAmount } from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch()

  //default state of 1 for input field
  const [incrementAmountBy, setIncrementAmountBy]= useState<number>(1)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIncrementAmountBy(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        {/* Chose input type as number  */}
        <input className={styles.textbox} aria-label="Set increment amount" type='number' value={incrementAmountBy} onChange={handleInputChange}/>
        <button
          className={styles.button_text}
          onClick={() => dispatch((incrementByAmount(incrementAmountBy)))}
        >
          Add Amount
        </button>
        <button
          className={styles.button_text}
          onClick={() => dispatch(incrementIfOdd(incrementAmountBy))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
