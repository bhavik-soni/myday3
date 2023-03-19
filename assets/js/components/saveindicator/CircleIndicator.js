import React from "react";

export default function CircleIndicator({ color }) {
  return (
    <>
      <div
        className={`ml-2 w-3 h-3 rounded-full ${
          color === "green"
            ? "bg-green-500"
            : color === "yellow"
            ? "bg-yellow-500"
            : "bg-red-500"
        }`}
      ></div>
    </>
  );
}
