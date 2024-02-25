import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
import '../App.css'
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div className=''>
       <section className="w-full py-12 md:py-24 lg:py-32 xl:flex xl:justify-center ">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Projects</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the projects I have worked on to showcase my skills and creativity. Check out github repos of these projects!
          
          </p>
        </div>
        <ProjectCard/>
      </div>
    </section>
    </div>
  )
}
