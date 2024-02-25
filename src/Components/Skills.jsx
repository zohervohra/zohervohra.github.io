import React from 'react'
import Reactlogo from '../assets/react.svg'
import JSlogo from '../assets/javascript.svg'
import mongologo from '../assets/mongodb.svg'
import htmllogo from '../assets/html.svg'
import tailwindlogo from '../assets/tailwind-css.svg'
import  nodeLogo from '../assets/nodejs.svg'
export default function Skills() {
  return (
    <div>
       <section className="w-full py-12 md:py-24 lg:py-32 xl:flex xl:items-center xl:justify-center ">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Skills</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I'm proficient in a variety of front-end technologies and frameworks.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 py-4">
              <div className='flex flex-row justify-center'>
                <h3 className="text-lg font-bold text-secondary pr-3">HTML/CSS </h3>
                <img src={htmllogo} alt="" style={{width : '30px' , height : '30px'}} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Building the foundation of the web.</p>
              </div>
              <div className="grid gap-1 py-4">
              <div className='flex flex-row justify-center'>
                <h3 className="text-lg font-bold text-secondary pr-3">Javascript </h3>
                <img src={JSlogo} alt="" style={{width : '30px' , height : '30px'}} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Making websites interactive and dynamic.</p>
              </div>
              <div className="grid gap-1 py-4">
                <div className='flex flex-row justify-center'>
                <h3 className="text-lg font-bold text-secondary pr-3">React </h3>
                <img src={Reactlogo} alt="" style={{width : '30px'}} />
                </div>
               
                <p className="text-sm text-gray-500 dark:text-gray-400">Creating fast and scalable web applications.</p>
              </div>
              <div className="grid gap-1 py-4">
              <div className='flex flex-row justify-center'>
                <h3 className="text-lg font-bold text-secondary pr-3">MongoDB</h3>
                <img src={mongologo} alt="" style={{width : '30px'}} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Managing and storing data with MongoDB.
                </p>
              </div>
              <div className="grid gap-1 py-4">
              <div className='flex flex-row justify-center'>
                <h3 className="text-lg font-bold text-secondary pr-3">Tailwind </h3>
                <img src={tailwindlogo} alt="" style={{width : '30px'}} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Styling with utility-first CSS framework.</p>
              </div>
              <div className="grid gap-1 py-4">
              <div className='flex flex-row justify-center'>
                <h3 className="text-lg font-bold text-secondary pr-3">NodeJS</h3>
                <img src={nodeLogo} alt="" style={{width : '30px' , height : '30px'}} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Built fast and efficient backend apps.</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
