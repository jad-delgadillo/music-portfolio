import React from "react";

export default function Button({ children }: any) {
  return (
    <div className="border border-black p-3 hover:scale-[120%] transition-all hover:cursor-pointer rounded-full">
      {children}
    </div>
  );
}
