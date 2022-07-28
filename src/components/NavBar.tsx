import Link from "next/link";
import React from "react";

export default function NavBar({ className }: any) {
  const navLinks = ["About", "Projects", "Contact"];

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
    <div className="relative m-auto items-center justify-center rounded-lg border-b w-screen bg-white   ">
      <div className="flex flex-row m-auto max-w-7xl justify-between w-screen p-5">
        <Link href={"/"}>
          <a className="md:flex hidden font-bold">alw.</a>
        </Link>

        <nav className="flex flex-row md:m-0 m-auto ">
          {navLinks.map((nav) => renderNavLink(nav))}
        </nav>
      </div>
    </div>
  );
}
