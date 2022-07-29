import React from "react";

export default function Button({ children }: any) {
  return (
    <div className="border border-black hover:bg-trueYellow p-4 px-5 hover:scale-[110%] hover:shadow-xl transition-all hover:cursor-pointer rounded-full">
      {children}
    </div>
  );
}
