import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tools from "./Tools";
import ButtonRender from "./ButtoRender";

const BiggerBoxItem = () => {
  return (
    <div className="flex w-full gap-6 lg:grid lg:grid-cols-12">
    <div className="flex w-full flex-col rounded-sm border border-accent/15 bg-accent/5 lg:col-span-12 lg:grid lg:grid-cols-12 lg:gap-6 xl:col-span-11 xl:grid-cols-11">
      <div className="col-span-6 w-full p-4 sm:p-6">
        <div className="rounded-md border border-accent/15 bg-dark sm:p-3">
          <Link href={"#"}>
            <div className="relative aspect-video w-full overflow-clip rounded-sm duration-300 ease-in-out-quad hover:scale-[0.97]">
              <Image
                src="/images/project_image.svg"
                loading="lazy"
                // layout="fill"
            
                width={640}
                height={340}
                className="absolute h-full w-full"
                alt="box-item-1"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="col-span-6 flex h-full flex-col items-start justify-between gap-6 p-6 pt-3 sm:gap-9 sm:p-9 sm:pt-3 lg:gap-12 lg:py-9 lg:pr-9 xl:col-span-5 lg:pl-0">
        <div className="flex flex-wrap gap-1.5 pb-3 pt-0 lg:pb-6">
          <Tools name="Figma" />
          <Tools name="Webflow" />
        </div>

        <h3 className="text-2xl font-medium md:text-3xl">GiFu Portfolio</h3>
        <p className="line-clamp-3 max-w-[60ch] text-sm opacity-90 sm:text-base">
          Design and development of Antonio `&quot;SPWN`&quot; Plaza&apos;s website/portfolio, a
          designer, illustrator and animator, among other things. The goal was
          to create a website to showcase his best work and the different
          physical products he creates, while maintaining his style and way of
          communicating.
        </p>

        <div className="flex w-full items-center justify-between gap-12">
        <div className="hidden items-center xs:flex">
            <Image alt="avatar" src='/images/avatar_dani_calero_small.webp' width={48} height={48} loading="lazy" style={{ color : "transparent"}} className="size-10 rounded-full bg-light -ml-2 border-2 border-dark first:ml-0" />
        </div>
        <ButtonRender title="View project" />
      </div>
      </div>



    </div>
    </div>
  );
};

export default BiggerBoxItem;
