import React from 'react'
import HeadingAction from './HeadingAction'
import BiggerBoxItem from './BiggerBoxItem'

const ProjectsCTA = () => {
  return (
    <section id="projects-section" className='py-32 sm:py-48 md:py-52 lg:py-64' >
      <div className="container">
        <div className='flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24'>
            <HeadingAction title='What we&apos;ve already done for others.'
                mini_text='Projects'
                content='Each project is an opportunity to bring your goals to life and exceed your expectations. We dedicate ourselves entirely to creating customized projects that help you stand out in the market.'
                buttonText='View projects'
            />
            <div className='relative z-20 col-span-12 flex flex-col gap-6 md:gap-9 lg:gap-12 project-items-hold'>
                <BiggerBoxItem />
                <BiggerBoxItem />
                <BiggerBoxItem />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsCTA
