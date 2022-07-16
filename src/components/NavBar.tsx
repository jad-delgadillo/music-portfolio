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
        <button className="mx-4 px-1 md:py-0 py-3" onClick={handleClickNav}>
          {content}
        </button>
      </div>
    );
  };

  return (
    <div className=" m-auto items-center justify-centerl bg-yellow-200 w-screen">
      <div className="flex flex-row relative m-auto items-center justify-between max-w-7xl w-screen p-5">
        <h1>• • •</h1>

        <nav className="flex flex-row">
          {navLinks.map((nav) => renderNavLink(nav))}
        </nav>
      </div>
    </div>
  );
}
