import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
import React from "react";
export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button aria-label="reset" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  );
}
