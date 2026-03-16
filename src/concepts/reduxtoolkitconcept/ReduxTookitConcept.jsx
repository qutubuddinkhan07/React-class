import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counterslice";

const ReduxTookitConcept = () => {
  const result = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl mb-3">{result}</h1>
      <button
        className="px-3 py-2 bg-green-600 cursor-pointer rounded-lg"
        onClick={() => dispatch(increment())}
      >
        Increment+
      </button>
      <button
        className="px-3 py-2 bg-red-600 cursor-pointer rounded-lg ml-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement-
      </button>
      <button
        className="px-3 py-2 bg-red-600 cursor-pointer rounded-lg ml-2"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

export default ReduxTookitConcept;
