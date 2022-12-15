import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="flex flex-col md:min-h-screen h-[750px] items-start md:text-left text-center justify-between p-20 bg-trueYellow rounded-[3.5rem]">
      <div className="tracking-tighter leading-none">
        <h1 className="md:text-[5.5vw] text-[14vw] font-normal">
          Planning to make some music?
        </h1>
        <h1 className="md:text-[5.5vw] text-[14vw] mt-10 md:mt-0 font-medium leading-none">
          Get in touch!
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between w-screen max-w-full mx-auto">
        <div className="flex flex-row items-center ">
          <Button>
            <a
              className="hover:cursor-pointer md:text-3xl text-xl transition-all"
              href="mailto:hola@alwaysjad.dev"
            >
              hola@alwaysjad.dev
            </a>
          </Button>
          <h1 className="text-xl font-extralight ml-10 hidden md:flex">
            © alw • A Creative Company • 2022
          </h1>
        </div>
        <h1 className="text-2xl font-bold md:flex hidden">alw.</h1>
        <h1 className="text-xs font-normal mt-10 md:hidden flex">
          © alw • A Creative Company • 2022
        </h1>
      </div>
    </div>
  );
}
