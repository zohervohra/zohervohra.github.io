import React from 'react'
import pic from '../assets/pic.jpg'


export default function Home() {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 xl:flex xl:items-center xl:justify-center">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col-reverse md:grid gap-6 lg:grid-cols-3 lg:gap-12 xl:gap-16 xl:flex-row">
                        <div className="flex flex-col justify-center space-y-4  col-span-2">
                            <div className="space-y-2">
                                <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl text-primary">Hello , I am Zoher Vohra</h1>
                                <p className="text-gray-500">
                                As an aspiring full stack developer, I'm passionate about crafting dynamic web applications that enhance user experiences. With a focus on clean, efficient code and a love for problem-solving, I'm dedicated to mastering the art of web development
                                </p>
                            </div>
                            {/* <div className="space-y-2">
                                <h2 className="text-xl font-bold tracking-tight">Experience</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    I've been in the industry for over a decade, honing my skills and staying updated with the latest
                                    trends. My goal is to make every client feel confident and beautiful.
                                </p>
                            </div> */}
                        </div>
                        <div className="flex flex-row items-center justify-center space-y-4 py-6">
                            <img
                                src={pic}
                                // width="300"
                                // height="300"
                                alt="Hairstylist"
                                className="rounded-full border aspect-square object-cover w-40 h-40 xl:w-64 xl:h-64"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
