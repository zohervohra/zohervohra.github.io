import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();
import '../App.css'
import newsMonkey from '../assets/newsMonkey.png'
import textUtils from '../assets/textUtils.png'
import Glidez from '../assets/Glidez.png'
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className=''>
       <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Projects</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are some of the projects I have worked on to showcase my skills and creativity. Click on the images
            to view the projects.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"  data-v0-t="card"  data-aos="zoom-in-up" data-aos-duration="500">
            <div className="p-4 flex flex-col items-start space-y-4  shadow-2xl">
              <img
                src={newsMonkey}
                width="400"
                height="225"
                alt="Project"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full"
              />
              <div className="space-y-2 w-full">
                <h3 className="text-xl font-bold text-secondary">News Monkey</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                 News Website for various domains such as science , health , entertainment.
                </p>
              </div>
            </div>
            <div className="items-center flex w-full justify-center p-4">
            <a href="https://github.com/zohervohra/NewsMonkey">
             <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Click Me!</button>
           </a>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"  data-v0-t="card"data-aos="zoom-in-up" data-aos-duration="500">
            <div className="p-4 flex flex-col items-start space-y-4  shadow-2xl">
              <img
                src={textUtils}
                width="400"
                height="225"
                alt="Project"
                className=" overflow-hidden rounded-lg object-cover object-center w-full"
              />
              <div className="space-y-2 w-full">
                <h3 className="text-xl font-bold text-secondary">TextUtils</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                 A Text Utility app for editing text.
                </p>
              </div>
            </div>
            <div className="items-center flex w-full justify-center p-4">
              <a href="https://github.com/zohervohra/textUtils">
             <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Click me!</button>
             </a>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md"  data-v0-t="card"data-aos="zoom-in-up" data-aos-duration="500">
            <div className="p-4 flex flex-col items-start space-y-4  shadow-2xl">
              <img
                src={Glidez}
                width="400"
                height="225"
                alt="Project"
                className="aspect-video overflow-hidden rounded-lg object-cover object-center w-full"
              />
              <div className="space-y-2 w-full">
                <h3 className="text-xl font-bold text-secondary">Glidez</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                 An E-commerce website for Shoes
                </p>
              </div>
            </div>
            <div className="items-center flex w-full justify-center p-4">
            
              <a href="https://github.com/zohervohra/Glidez">
             <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Click Me!</button>
             </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
