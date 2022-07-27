import React from "react";

export default function NavBar() {
  const navLinks = ["Projects", "About", "Contact"];

  const renderNavLink = (content: any) => {
    const scrollToId = `${content.toLowerCase()}`;
    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="" key={content}>
        <button
          className="md:mx-4 mx-4 py-0 md:px-5 tracking-widest hover:bg-gray-300"
          onClick={handleClickNav}
        >
          {content}
        </button>
      </div>
    );
  };

  return (
    <div className="relative m-auto items-center justify-centerl rounded-lg border-b w-screen bg-white   ">
      <div className="flex flex-row relative m-auto items-center justify-between  max-w-7xl w-screen p-5">
        <h1 className="md:flex hidden font-bold">alw.</h1>

        <nav className="flex flex-row  m-auto items-center justify-center ">
          {navLinks.map((nav) => renderNavLink(nav))}
        </nav>
      </div>
    </div>
  );
}
