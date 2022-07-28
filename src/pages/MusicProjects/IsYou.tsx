import Image from "next/image";
import React from "react";
import Container from "../../components/Container";

export default function IsYou() {
  const meta = {
    title: "All I See is You",
    description: "Tonight Show with Jimmy Fallon",
  };
  return (
    <div>
      <Container>
        <div className="block p-5">
          {/* <Image
            src={"/assets/trailers/alliseeisyou.jpg"}
            width={400}
            height={605}
            layout="intrinsic"
            className="rounded-lg"
          /> */}
          <video
            src="/assets/videos/IsYou.mov"
            controls
            className="rounded-xl"
          ></video>
          <h1 className="text-lg font-medium">{meta.title}</h1>
          <p className="font-extralight">{meta.description}</p>
        </div>
      </Container>
    </div>
  );
}
