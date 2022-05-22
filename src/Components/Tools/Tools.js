import React from "react";
import Tool from "../Tool/Tool";

const Tools = () => {
  let dummy = [1, 2, 3, 4, 5, 6];
  return (
    <div className="container mx-auto my-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dummy.map((tool) => (
        <Tool></Tool>
      ))}
      </div>
    </div>
  );
};

export default Tools;
