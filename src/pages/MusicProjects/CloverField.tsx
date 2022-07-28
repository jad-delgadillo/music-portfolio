import Image from "next/image";
import React from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Layout from "../../components/Layout";

export default function CloverField() {
  const meta = {
    title: "Cloverfield Paradox",
    description: "Super Bowl TV Spot",
  };
  return (
    <div>
      <Layout>
        <div className="block p-5">
          {/* <Image
            src={"/assets/trailers/cloverfield-paradox.jpg"}
            width={400}
            height={605}
            layout="intrinsic"
            className="rounded-lg"
          /> */}
          <video
            src="/assets/videos/clover.mov"
            controls
            className="rounded-xl"
          ></video>

          <h1 className="text-lg font-medium">{meta.title}</h1>
          <p className="font-extralight">{meta.description}</p>
        </div>
        <Button>Projects</Button>
      </Layout>
    </div>
  );
}
