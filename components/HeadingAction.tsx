import ButtonRender from "./ButtoRender"

type Props = {
    title: string
    content: string
    buttonText: string
    // buttonLink: string 
    mini_text: string
}

const HeadingAction = ({title,buttonText,content,mini_text}: Props) => {
  return (
    <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-start text-balance">
              <div className="mb-2 flex items-center gap-1 md:gap-1.5 text-accent">
                <div
                  className="-ml-2 -mt-0.5"
                  // style="will-change: transform; transform: rotate(101.455deg);"
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
                    className="lucide lucide-sparkle size-4 md:size-5"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  </svg>
                </div>
                <h2 className="flex items-start gap-1 text-base md:text-lg">
                  {mini_text}
                  <span aria-hidden="true" className="mt-0.5 text-xs">
                    01
                  </span>
                </h2>
              </div>
              <span className="max-w-[17ch] text-4xl leading-[1.2] mb-3 font-medium md:mb-6 md:text-6xl lg:text-[5rem]">
               {title}
              </span>
              <p className="max-w-[66ch] text-base md:text-lg text-light/90">
                {content}
              </p>
            </div>
            <ButtonRender title={buttonText} />
          </div>
  )
}

export default HeadingAction
