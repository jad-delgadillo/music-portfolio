import React from "react";
import Project from "../../components/Project";
import Container from "../../components/Container";

import thumbHostile from "../../../public/assets/trailers/Hostile-Planet-Natgeo.jpg";
import thumbClover from "../../../public/assets/trailers/cloverfield-paradox.jpg";
import thumbMike from "../../../public/assets/trailers/magicmikelive.jpg";
import thumbIsYou from "../../../public/assets/trailers/alliseeisyou.jpg";

export default function MusicProjects() {
  return (
    <div>
      <Container>
        <div className="bg-white w-screen min-h-screen items-center justify-center rounded-[3.5rem]">
          <div className="flex flex-col lg:items-start items-center justify-center p-10">
            <h1 className="cursor-default font-normal lg:text-[5.5vw] text-[14vw]">
              Projects.
            </h1>

            <p className="py-10 lg:text-[1vw] md:text-[2.8vw] text-[4.8vw] leading-tight tracking-wider text-justify">
              I had the fortune to work on this media campaigns doing the
              composition and production of the music.
            </p>

            <div className="flex flex-col items-center justify-center md:flex-row">
              <Project
                id="HostilePlanet"
                title="Hostile Planet"
                description="Worldwide Broadcast Campaign"
                thumbnail={thumbHostile}
              ></Project>
              <Project
                id="CloverField"
                title="Cloverfield Paradox"
                description="Worldwide Broadcast Campaign"
                thumbnail={thumbClover}
              ></Project>
              <Project
                id="MagicMike"
                title="Magic Mike Las Vegas"
                description="Show Campaign"
                thumbnail={thumbMike}
              ></Project>
              <Project
                id="IsYou"
                title="All I See is You"
                description="Tonight Show with Jimmy Fallon"
                thumbnail={thumbIsYou}
              ></Project>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
