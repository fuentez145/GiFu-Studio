const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col justify-center overflow-clip md:items-center md:text-center">
      <div
        style={{
          willChange: "transform, opacity, filter",
          opacity: 1,
          filter: "blur(0px)",
          transform: "none",
        }}
      >
        <div className="container flex flex-col md:items-center">
          <div className="mb-4 flex items-center gap-1.5 text-nowrap text-xs text-accent md:gap-4 md:text-lg">
            <div className="flex items-start gap-1 md:items-center md:gap-2">
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
                className="lucide lucide-drafting-compass hidden size-3 xs:block md:size-5"
              >
                <path d="m12.99 6.74 1.93 3.44"></path>
                <path d="M19.136 12a10 10 0 0 1-14.271 0"></path>
                <path d="m21 21-2.16-3.84"></path>
                <path d="m3 21 8.02-14.26"></path>
                <circle cx="12" cy="5" r="2"></circle>
              </svg>
              Web design
            </div>
            <span className="hidden opacity-50 sm:block">/</span>
            <div className="size-0.5 rounded-full bg-accent/50 sm:hidden"></div>
            <div className="flex items-start gap-1 md:items-center md:gap-2">
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
                className="lucide lucide-code-xml hidden size-3 xs:block md:size-5"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
              Web development
            </div>
            <span className="hidden opacity-50 sm:block">/</span>
            <div className="size-0.5 rounded-full bg-accent/50 sm:hidden"></div>
            <div className="flex items-start gap-1 md:items-center md:gap-2">
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
                className="lucide lucide-shapes hidden size-3 xs:block md:size-5"
              >
                <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                <circle cx="17.5" cy="17.5" r="3.5"></circle>
              </svg>
              Low code
            </div>
            <span className="hidden opacity-50 sm:block">/</span>
            <div className="size-0.5 rounded-full bg-accent/50 sm:hidden"></div>
            <div className="flex items-start gap-1 md:items-center md:gap-2">
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
                className="lucide lucide-database hidden size-3 xs:block md:size-5"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                <path d="M3 12A9 3 0 0 0 21 12"></path>
              </svg>
              Backend
            </div>
          </div>
          <h1 className="text-4xl font-medium leading-[1.2] md:text-[max(min(5.5cqw,5.5rem),3rem)] lg:mb-2.5">We create scalable digital 
            solutions for your business.</h1>
          <p className="mb-8 mt-4 max-w-[60ch] text-base text-light/90 md:mt-4 md:text-lg lg:text-xl xl:mb-12 xl:mt-6">
            Web experiences that make a difference: user-centered design and
            robust web development that drives your business forward.
          </p>
          <div className="xs:flex-row flex flex-col gap-4">
            <button className="rounded-sm w-full sm:w-auto relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-8 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:scale-[1.02] duration-200 ease-in-out-quart group underline-offset-2 border-[1.5px] border-dark/20 bg-accent text-dark hover:border-white/25 px-8 py-3">
              <div className="ease-in-out-quart absolute transition-all duration-300 -left-3.5 -top-3.5 rotate-12 scale-0 text-dark group-hover:-rotate-0 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="hsl(var(--accent))"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle ease-in-out-quad duration-200 rotate-0 group-hover:rotate-45 !size-6"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              <div className="ease-in-out-quart absolute transition-all duration-300 -right-3.5 -top-3.5 rotate-12 scale-0 text-dark group-hover:-rotate-0 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="hsl(var(--accent))"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle ease-in-out-quad duration-200 rotate-0 group-hover:rotate-45 !size-6"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              <div className="ease-in-out-quart absolute transition-all duration-300 -left-3.5 -bottom-3.5 rotate-12 scale-0 text-dark group-hover:-rotate-0 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="hsl(var(--accent))"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle ease-in-out-quad duration-200 rotate-0 group-hover:rotate-45 !size-6"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              <div className="ease-in-out-quart absolute transition-all duration-300 -right-3.5 -bottom-3.5 rotate-12 scale-0 text-dark group-hover:-rotate-0 group-hover:scale-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="hsl(var(--accent))"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle ease-in-out-quad duration-200 rotate-0 group-hover:rotate-45 !size-6"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              Get a quote{" "}
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
                className="lucide lucide-scroll-text size-5"
              >
                <path d="M15 12h-5"></path>
                <path d="M15 8h-5"></path>
                <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
                <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
              </svg>
            </button>
            <button className="rounded-sm w-full sm:w-auto relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-base transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-8 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:scale-[1.02] duration-200 ease-in-out-quart group underline-offset-2 overflow-clip border-[1.5px] font-medium border-light/30 bg-dark/90 hover:bg-light hover:text-accent-foreground px-8 py-3">
              <div className="ease-in-out-quart absolute transition-all duration-300 -left-3 -top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle text-light/30 group-hover:text-dark ease-in-out-quad !size-6 rotate-12 duration-150 group-hover:-rotate-12"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              <div className="ease-in-out-quart absolute transition-all duration-300 -right-3 -top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle text-light/30 group-hover:text-dark ease-in-out-quad !size-6 rotate-12 duration-150 group-hover:-rotate-12"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              <div className="ease-in-out-quart absolute transition-all duration-300 -left-3 -bottom-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle text-light/30 group-hover:text-dark ease-in-out-quad !size-6 rotate-12 duration-150 group-hover:-rotate-12"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              <div className="ease-in-out-quart absolute transition-all duration-300 -right-3 -bottom-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkle text-light/30 group-hover:text-dark ease-in-out-quad !size-6 rotate-12 duration-150 group-hover:-rotate-12"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                </svg>
              </div>
              View projects{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-image size-5"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-screen w-screen overflow-clip"
      >
        <div
          className="absolute left-4 h-[16vh] w-[12vw] animate-slow-pulse bg-accent md:h-[25vh] md:w-[16vw]"
          style={{
            willChange: "transform, filter",
            top: "0%",
            filter: "blur(20vw)",
          }}
        ></div>
        <div
          className="absolute -right-8 h-[16vh] w-[12vw] animate-slow-pulse bg-accent md:h-[32rem] md:w-[38rem]"
          style={{
            willChange: "transform, filter",
            top: "80%",
            filter: "blur(20vw)",
          }}
        ></div>
      </div>
      <div className="absolute inset-0 -z-20 will-change-transform"></div>
    </section>
  );
};

export default Hero;
