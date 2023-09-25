'use client';

import { decrement, decrementByAmount, increment, incrementByAmount, reset } from "./redux/features/counter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  console.log(count, "count");

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button style={{ marginInline: 16 }} onClick={() => dispatch(incrementByAmount(5))}>increment by 5</button>
        <button style={{ marginInline: 16 }} onClick={() => dispatch(decrementByAmount(5))}>decrement by 5</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </main>
  )
}
