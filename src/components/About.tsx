import React from "react";

export default function About() {
  return (
    <div className="flex flex-col md:min-h-screen bg-trueYellow rounded-[3.5rem] p-10">
      <div className="md:flex md:flex-col md:items-start flex flex-col items-center justify-center">
        <h1 className="md:text-[5.5vw] text-[14vw] text-justify font-normal leading-tight">
          Passionate music producer, <br /> and storyteller enthusiast.
        </h1>
        <div className="p-5"></div>
        <p className="md:text-[2.5vw] text-[4.8vw] md:text-left text-justify leading-tight">
          I find joy translating the artist vision into music. <br /> Bringing
          ideas that provoke emotions to life.
        </p>
        <div className="p-10"></div>
      </div>
    </div>
  );
}
