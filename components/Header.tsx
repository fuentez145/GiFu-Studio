import React from "react";
import ButtonRender from "./ButtoRender";
import Image from "next/image";

const Heading = () => {
  return (
    <header
      role="banner"
      className="w-scren fixed top-0 z-[500] w-full border-b border-accent/15 bg-dark/90 backdrop-blur-md"
    >
      <nav
        role="banner"
        aria-label="Main Navigation"
        className="container relative py-2 md:py-3"
      >
        <div className="flex items-center justify-between md:grid md:grid-cols-12">
          <div className="h-5 md:col-span-2 md:h-6">
            <a href="#">
              <Image src="/logo_sample.svg" width={93} height={24} 
              // className="h-10 w-10"
              alt="logo" />
            </a>
          </div>
          <div className="hidden items-center gap-6 md:col-span-8 md:flex md:justify-center">
            <ul className="flex items-center gap-6" role="navigation">
              <li>
                <a
                  href="#"
                  className="group flex cursor-pointer items-start gap-1 py-1 font-medium duration-150 ease-in-out-cubic hover:scale-[1.02] hover:text-accent md:py-0"
                >
                  Services
                </a>
              </li>
              <li>
                <div
                  className="h-6 border-l-[1.5px] border-light/50"
                  aria-hidden="true"
                ></div>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex cursor-pointer items-start gap-1 py-1 font-medium duration-150 ease-in-out-cubic hover:scale-[1.02] hover:text-accent md:py-0"
                >
                  Projects
                </a>
              </li>
              <li>
                <div
                  className="h-6 border-l-[1.5px] border-light/50"
                  aria-hidden="true"
                ></div>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex cursor-pointer items-start gap-1 py-1 font-medium duration-150 ease-in-out-cubic hover:scale-[1.02] hover:text-accent md:py-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-end justify-end md:col-span-2">
           <ButtonRender title="Contact Us" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Heading;
