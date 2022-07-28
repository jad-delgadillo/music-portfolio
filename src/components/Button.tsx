import React from "react";

export default function Button({ children }: any) {
  return (
    <div className="border border-black p-4 px-5 hover:scale-[120%] transition-all hover:cursor-pointer rounded-full">
      {children}
    </div>
  );
}
