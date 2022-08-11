import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Layout(props: any) {
  const { children } = props;
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col min-h-screen w-screen items-center justify-center pointer-events-auto bg-white "
      >
        {children}
      </motion.div>
    </>
  );
}
