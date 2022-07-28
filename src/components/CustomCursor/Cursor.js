import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const textLink = () => setCursorVariant("textLink");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    default2: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
      height: 200,
      width: 200,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    textLink: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 17,
      height: 34,
      width: 34,
      // display: "none",
    },
  };
  return (
    <>
      <div className=" flex flex-col min-h-screen rounded-[3.5rem] bg-white items-center justify-center">
        {/* <motion.div
          variants={variants}
          animate={cursorVariant}
          className="bg-white h-[8px] w-[8px] rounded-full fixed top-0 left-0 pointer-events-none filter mix-blend-difference blur-0 "
        ></motion.div> */}
        <motion.div
          variants={variants}
          animate={cursorVariant}
          className="cursor"
        ></motion.div>
        <motion.div
          variants={variants}
          animate={"textLink"}
          className="border border-black  h-[20px] w-[20px] rounded-full fixed top-0 left-0 pointer-events-none  "
        ></motion.div>

        {/* <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" filter md:text-[8vw] text-[14vw] font-bold mb-10 text-black hover:bg-white   hover:border pointer-events-auto px-10 rounded-full  transition-all  "
        >
          alwaysjad
        </h1> */}
        {/* <a
          target="_blanc"
          href="https://drive.google.com/drive/folders/1Qu6-omUqblkDUg6c1N4Lu2oRoB8wpNuH?usp=sharing"
          onMouseEnter={textLink}
          onMouseLeave={textLeave}
          className="bottom-10 filter text-[3vw] font-bold  text-black  hover:bg-white hover:ring-1  ring-gray-200 pointer-events-auto px-10 rounded-full  transition-all  "
        >
          Project Link
        </a> */}
      </div>
    </>
  );
}

export default Cursor
