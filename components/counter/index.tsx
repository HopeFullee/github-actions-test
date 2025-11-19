// src/components/Counter/index.tsx
"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount((prev) => prev + 1);
  };

  const onDecrementClick = () => {
    setCount((prev) => prev - 1);
  };

  const onResetClick = () => {
    setCount(0);
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={onDecrementClick}
      >
        -
      </button>
      <span role="counter" className="mt-4 text-center text-xl font-bold mx-4">
        {count}
      </span>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={onIncrementClick}
      >
        +
      </button>
      <div>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded mt-4"
          onClick={onResetClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
