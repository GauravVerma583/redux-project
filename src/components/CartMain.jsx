import React from "react";
import { useSelector } from "react-redux";

export default function CartMain() {
  const item = useSelector((state) => state.allCart.cart);

  return (
    <>
      {item.map((kuchbhi) => (
        <h1>{kuchbhi.title}</h1>
      ))}
    </>
  );
}
