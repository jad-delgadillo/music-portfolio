import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel() {
  let [count, setCount] = useState(1);
  let colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
  return (
    <div className="flex flex-col min-h-screen  bg-white rounded-[3.5rem] p-20">
      <h1 className="md:text-[5.5vw] text-[14vw] font-normal leading-tight">
        Reels.
      </h1>
      <div className="items-center justify-center m-auto">
        <div className="w-[70%] flex flex-col m-auto items-center justify-center"></div>

        <div className="flex justify-center ">
          <AnimatePresence initial={false}>
            <motion.div className="items-center flex justify-center rounded-xl lg:w-[70%] w-[100%] ">
              <motion.video
                className="rounded-xl"
                controls
                src="/assets/reels/daop.mp4"
              ></motion.video>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between mt-5">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-trueYellow p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-trueYellow p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// key={count}
// initial={{ x: 100 }}
// animate={{ x: 0 }}
// className={`w-[80%] h-[80%] flex justify-center items-center ${
//   colors[Math.abs(count) % 4]
// }`}
// >

{
  /* <video
className="rounded-xl"
controls
src="/assets/reels/daop.mp4"
></video> */
}
