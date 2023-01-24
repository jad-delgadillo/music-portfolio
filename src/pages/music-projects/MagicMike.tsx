import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

export default function MagicMike() {
  const meta = {
    title: "Magic Mike",
    company: "Las Vegas Show",
    description: "Worldwide Broadcast",
    credits: "Credits: Production, Compositon, Sound Design, Mixing and Master",
  };
  return (
    <div>
      <Layout>
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center m-auto">
          <div className="lg:flex lg:flex-row flex flex-col items-center justify-center m-auto p-5">
            <div className="leading-tight lg:pr-[5vw] pr-0">
              <h1 className="lg:text-[5.5vw] text-[12.5vw] font-medium">
                {meta.title}
              </h1>
              <p className="lg:text-[3vw] text-[7.5vw] font-extralight">
                {meta.company}
              </p>
              <p className="lg:text-[1.2vw] text-[4vw] font-extralight">
                {meta.description}
              </p>
              <p className="lg:text-[0.9vw] text-[2.5vw] font-extralight">
                {meta.credits}
              </p>
            </div>
            <div className="lg:w-[40%] w-[100%] lg:mt-0 mt-10">
              <video
                src="/assets/videos/magic.mov"
                controls
                className="rounded-xl"
              ></video>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <Link href={"https://music.alwaysjad.dev"}>
            <a className="font-medium">
              <Button>Back.</Button>
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
