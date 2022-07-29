import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reels } from "./reels-data";
import { wrap } from "popmotion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 0 : -0,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const contentIndex = wrap(0, reels.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const asset = reels[contentIndex];

  return (
    <div className="flex flex-col min-h-screen bg-white rounded-[3.5rem] p-20">
      <div className="leading-none">
        <h1 className="lg:text-[5.5vw] md:text-[12.5vw] text-[14vw] font-normal ">
          Reels.
        </h1>
        <p className="font-extralight ml-1">more music.</p>
      </div>
      <div className="items-center  justify-center m-auto">
        <div className="w-[70%] flex flex-col m-auto items-center  justify-center"></div>

        <div className="flex flex-col m-auto items-center  justify-center ">
          <AnimatePresence initial={false} exitBeforeEnter>
            <motion.div
              className={
                "asset flex flex-row items-center justify-center lg:w-[1000px] w-[100%]"
              }
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 2000, damping: 140 },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <button
                onClick={() => paginate(1)}
                className="hover:bg-trueYellow p-2 rounded-full hover:scale-[110%] mr-5  hover:shadow-xl shadow-black transition-all"
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
              {asset?.type === "video" ? (
                <video
                  className="felx items-center justify-center rounded-xl"
                  controls
                  preload="metadata"
                >
                  <source src={asset?.src} type="video/mp4" />
                </video>
              ) : (
                ""
              )}
              <button
                onClick={() => paginate(-1)}
                className="hover:bg-trueYellow p-2 ml-5 rounded-full hover:scale-[110%] hover:shadow-xl shadow-black transition-all"
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
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between  mt-5"></div>
      </div>
    </div>
  );
}

// const Reel = ({ src, name, ...props }: any) => (
//   <motion.div className="flex w-[100%]" {...props}>
//     <video controls>
//       <source src={src} type="video/mp4" />
//     </video>
//   </motion.div>
// );
