import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

export default function NavBar({ className }: any) {
  const navLinks = ["about", "projects", "contact"];

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
          className="md:mx-2 mx-4 md:py-0 md:px-5 rounded-xl py-5 px-5 md:my-0 my-2 transition-all hover:bg-gray-300"
          onClick={handleClickNav}
        >
          {content}
        </button>
      </div>
    );
  };

  return (
    <div className="relative m-auto items-center justify-center md:rounded-lg rounded-t-[3.5rem] md:border-b w-screen bg-white   ">
      <div className="flex flex-row m-auto max-w-7xl justify-between pt-10 md:pt-5 w-screen p-5">
        <Link href={"/"}>
          <a className="flex font-bold">alw.</a>
        </Link>
        <div className="md:flex md:flex-row items-center hidden ">
          <nav className="flex flex-row">
            {navLinks.map((nav) => renderNavLink(nav))}
          </nav>
        </div>

        <Menu as="div" className="flex flex-col md:hidden z-10 items-end">
          {({ open }) => (
            <Fragment>
              <Menu.Button>
                <div className="md:hidden flex w-[100%] hover:bg-gray-200 transition-all rounded items-center justify-center m-auto p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </div>
              </Menu.Button>
              <Transition
                show={open}
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-75 ease-out"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="md:hidden fixed filter  mix-blend-normal  right-2 flex flex-col bg-trueYellow rounded-2xl px-2 mt-2"
                >
                  <nav className="py-5 relative flex flex-col mx-5 items-center">
                    {navLinks.map((nav) => renderNavLink(nav))}
                  </nav>
                </Menu.Items>
              </Transition>
            </Fragment>
          )}
        </Menu>
      </div>
    </div>
  );
}
