"use client";

import { increment, random } from "@/lib/features/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hook";

import React from "react";

const Product = () => {
  const count = useAppSelector((state: any) => state.count.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increment());
  }

  const handleRandom = () => {
    dispatch(random());
  }

  return (
    <div>
      <h1>Test</h1>
      <button onClick={handleClick}>increment</button>
      <button onClick={handleRandom}>random</button>
      <span >{count}</span>
    </div>
  );
};

export default Product;
