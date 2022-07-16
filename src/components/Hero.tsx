import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
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
    },
  };
  return (
    <>
      <div className=" flex flex-col min-h-screen items-center justify-center">
        <motion.div
          variants={variants}
          animate={cursorVariant}
          className="bg-black h-[8px] w-[8px] rounded-full  fixed top-0 left-0 pointer-events-none  filter mix-blend-difference blur-0 "
        ></motion.div>
        <motion.div
          variants={variants}
          animate={"default2"}
          className="border border-black h-[40px] w-[40px] rounded-full fixed top-0 left-0 pointer-events-none filter mix-blend-difference"
        ></motion.div>
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" filter text-[8vw] font-bold  text-black hover:bg-white   hover:border pointer-events-auto px-10 rounded-full  transition-all  "
        >
          alwaysjad
        </h1>
      </div>
    </>
  );
}
