import React from "react";
import Tools from "./Tools";

const BoxItem = ({ box_span }: { box_span?: "sm" | "lg" }) => {
  box_span = box_span || "sm";
  let span: number = 0;
  if (box_span === "sm")
    span = 5;
  else
    span = 7;

  return (
    <div
      className={`relative flex flex-col items-start justify-between gap-2 overflow-clip rounded-sm bg-light p-6 text-dark backdrop-blur-sm sm:p-8 col-span-2 md:col-span-6 lg:col-span-${span}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-drafting-compass absolute -bottom-16 -right-16 -z-10 size-[16rem] -rotate-12 text-white/50 md:size-[20rem] md:-bottom-20 md:-right-20"
      >
        <path d="m12.99 6.74 1.93 3.44"></path>
        <path d="M19.136 12a10 10 0 0 1-14.271 0"></path>
        <path d="m21 21-2.16-3.84"></path>
        <path d="m3 21 8.02-14.26"></path>
        <circle cx="12" cy="5" r="2"></circle>
      </svg>
      <div className="mb-8 flex items-center justify-center rounded-sm bg-dark p-4 text-light sm:mb-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-drafting-compass size-5 md:size-7"
        >
          <path d="m12.99 6.74 1.93 3.44"></path>
          <path d="M19.136 12a10 10 0 0 1-14.271 0"></path>
          <path d="m21 21-2.16-3.84"></path>
          <path d="m3 21 8.02-14.26"></path>
          <circle cx="12" cy="5" r="2"></circle>
        </svg>
      </div>
      
      <div className="flex max-w-[60ch] flex-col gap-2">
            <h3 className="relative z-10 mt-auto text-xl font-semibold md:text-2xl">Web Design</h3>
            <div className="space-y-2 relative z-10 font-medium text-dark/75">
                <p className="text-md">We&apos;ll design your future website or redesign your current one for your team to develop.</p>
                <p className="text-md">We&apos;ll ensure your company stands out by improving your customers&apos; experience and building more trust with professional and effective web design.</p>
            </div>
            <div className="mt-4 flex items-center gap-6 font-semibold text-dark/75">
                <Tools name="Figma" />
    
            </div>
      </div>
    </div>
  );
};

export default BoxItem;
