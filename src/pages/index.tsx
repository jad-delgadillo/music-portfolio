import type { NextPage } from "next";

import About from "../components/About";
import Contact from "../components/Contact";
import Container from "../components/Container";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Reels from "../components/Reels";
import MusicProjects from "./MusicProjects";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <div className="snap-mandatory snap-y w-screen md:min-h-screen h-screen md:overflow-scroll">
          <section className="reltaive snap-start" id="navBar">
            <NavBar />
          </section>
          <section className="relative snap-start bg-black" id="hero">
            <Hero />
          </section>
          <section className="snap-start bg-black" id="about">
            <About />
          </section>
          <section className="snap-start bg-black" id="projects">
            <MusicProjects />
          </section>
          <section className="snap-start bg-black" id="reels">
            <Reels />
          </section>
          <section className="snap-start bg-black" id="contact">
            <Contact />
          </section>
        </div>
      </Container>
    </>
  );
};

export default Home;
