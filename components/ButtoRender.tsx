import React from 'react'

const ButtonRender = ({
    title = "View our work"
} : {
    title?: string
}) => {
  return (
    <button
    className="rounded-sm w-full sm:w-auto relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold transition-all focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-8 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:scale-[1.02] duration-200 ease-in-out-quart group underline-offset-2 border-[1.5px] border-dark/20 bg-accent text-dark hover:border-white/25 px-8 py-3"
  >
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
    {title}
  </button>
  )
}

export default ButtonRender
