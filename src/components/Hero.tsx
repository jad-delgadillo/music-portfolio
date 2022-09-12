import React, { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const textLink = () => setCursorVariant("textLink");

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
      // mixBlendMode: "difference",
    },
    textLink: {
      x: mousePosition.x - 17,
      y: mousePosition.y - 17,

      enterDelay: 100,
      leaveDelay: 100,
      height: 34,
      width: 34,
      backgroundColor: "  ",
      display: "",
    },
  };
  return (
    <>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", mass: 0.1 }}
        className="cursor z-10"
      ></motion.div>
      <motion.div
        variants={variants}
        animate={"textLink"}
        transition={{ type: "spring", mass: 0.00001 }}
        className="cursors border border-black  h-[50px] w-[50px] rounded-full z-10 fixed top-0 left-0 pointer-events-none  "
      ></motion.div>

      <div className="flex flex-col md:min-h-screen h-[750px] md:rounded-[3.5rem] rounded-b-[3.5rem] rounded-t-[3.5rem] bg-white items-center justify-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" filter md:text-[8vw] text-black text-[14vw] font-bold mb-10  hover:bg-white   hover:border pointer-events-auto px-10 rounded-full  transition-all  "
        >
          alwaysjad
        </h1>
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className=" filter md:text-[3vw] text-[6vw] font-normal mb-10 text-black hover:bg-white   hover:border pointer-events-auto px-10 rounded-full  transition-all  "
        >
          dangerously good music.
        </h1>
      </div>
    </>
  );
}
