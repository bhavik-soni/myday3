import React from "react";
import CircleIndicator from "./CircleIndicator";

export default function SaveIndicator() {
  return (
    <div class="items-center inline-flex">
      <span class="text-sm select-none text-gray-400">All changes saved</span>
      <CircleIndicator color="green" />
    </div>
  );
}
