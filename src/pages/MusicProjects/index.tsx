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
        <div className="bg-white w-screen min-h-screen items-center justify-center flex rounded-[3.5rem]">
          <div className="flex flex-col items-start justify-center  p-20">
            <h1 className="text-[5.5rem] cursor-default font-normal">
              <a href="#_" className="relative group">
                <span className="absolute hidden md:flex w-0 h-[100%] group-hover:w-full transition-all ease-out duration-300 bg-black"></span>
                <span className="relative group-hover:w-full md:hover:text-white hover:text-indigo-500 transition-all ease-out duration-300 ">
                  {" "}
                  Projects.{" "}
                </span>
              </a>
            </h1>

            <p className="py-10 tracking-wider">
              I had the fortune to work on this media campaigns doing the
              composition and production of the music.
            </p>

            <div className="flex flex-col md:flex-row">
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
