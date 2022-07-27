import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen  bg-trueYellow rounded-[3.5rem] p-20">
      <div className="md:flex md:flex-col md:items-start flex flex-col items-center justify-center">
        <h1 className="md:text-[5.5vw] text-[14vw] font-normal leading-tight">
          Passionate music producer, <br /> storyteller enthusiast.
        </h1>
        <div className="p-10"></div>
        <p className="md:text-[2.5vw] text-[3.8vw] md:text-left text-justify leading-tight">
          I find joy translating the artist vision into music. <br /> Bringing
          ideas that provoke emotions to life.
        </p>
        <div className="p-10"></div>
        <Button>
          <a className="font-medium">Projects</a>
        </Button>
      </div>
    </div>
  );
}
