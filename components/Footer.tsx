import Image from "next/image"
import Link from "next/link"
import ButtonRender from "./ButtoRender"

const Footer = () => {
  return (
    <footer className="flex w-full flex-col">
        {/* ANIMATE BANNER */}
      <div className="relative flex overflow-hidden border-t-[1.5px] border-accent/10 bg-accent/5 py-4 text-2xl font-medium text-accent backdrop-blur-[1px] md:py-6 md:text-5xl"></div>
        {/* URLS FOOT */}
      <div className="w-full bg-accent pb-4 pt-24 font-semibold text-dark md:pb-8 md:pt-32">
        <div className="container">
            <div className="flex flex-col gap-16">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div className="flex flex-col items-start gap-4 md:gap-6">
                        <Link href={"#"} className="inline-flex h-6 origin-center items-center rounded-sm duration-100 ease-in-out-quad hover:-rotate-1 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark text-dark">
                            <Image src="/logo_sample.svg" width={93} height={24} alt="logo" />
                        </Link>
                        <span className="text-lg md:text-xl">
                        Scalable digital solutions for your business.
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <ButtonRender title="Services" />
                        <ButtonRender title="Project" />
                        <ButtonRender title="Contact" />

                    </div>

                </div>
                <div className="flex flex-initial flex-wrap items-end justify-center gap-x-8 gap-y-4 text-center md:justify-between md:gap-8">
                    <span className="text-sm">©2024. All rights reserved</span>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-nowrap text-sm md:justify-normal">
                        <Link href={"#"} className="hover:underline">Privacy Policy</Link>
                        <Link href={"#"} className="hover:underline">Legal</Link>
                        <Link href={"#"} className="hover:underline">Cookie</Link>
                    </div>


                </div>
            </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
