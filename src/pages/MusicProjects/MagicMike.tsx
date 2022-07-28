import Image from "next/image";
import React from "react";
import Container from "../../components/Container";

export default function MagicMike() {
  const meta = {
    title: "Magic Mike Las Vegas",
    description: "Show Campaign",
  };
  return (
    <div>
      <Container>
        <div className="block p-5">
          {/* <Image
            src={"/assets/trailers/magicmikelive.jpg"}
            width={400}
            height={605}
            layout="intrinsic"
            className="rounded-lg"
          /> */}
          <video
            src="/assets/videos/magic.mov"
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
