import  React from 'react'
import newsMonkey from '../assets/newsMonkey.png'
import textUtils from '../assets/textUtils.png'
import Glidez from '../assets/Glidez.png'

export default function ProjectCard() {
    return (
        <>
            <div>
                <div className="cards mx-auto grid max-w-6xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3  " style={{ alignItems: "center" }}>
                    <div className="card red" style={{padding : "0"}}>
                    <div className="rounded-lg border border-sky-500 bg-card text-card-foreground shadow-sm w-full max-w-md hover:border-gray-600  transform transition duration-300 hover:scale-110 " data-v0-t="card" data-aos="zoom-in-up" data-aos-duration="500">
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
                    <div className="items-center flex w-full justify-center p-4 " >
                        <a href="https://github.com/zohervohra/NewsMonkey">
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  transform transition duration-300 hover:scale-110 ">Click Me!</button>
                        </a>
                    </div>
                </div>
                    </div>
                    <div className="card blue "style={{padding : "0"}}>
                    <div className="rounded-lg border border-sky-500 bg-card text-card-foreground shadow-sm w-full max-w-md  hover:border-gray-600  transform transition duration-300 hover:scale-110" data-v0-t="card" data-aos="zoom-in-up" data-aos-duration="500">
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
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transform transition duration-300 hover:scale-110">Click me!</button>
                        </a>
                    </div>
                </div>
                    </div>
                    <div className="card green" style={{padding : "0"}}>
                    <div className="rounded-lg border border-sky-500 bg-card text-card-foreground shadow-sm w-full max-w-md   hover:border-gray-600  transform transition duration-300 hover:scale-110" data-v0-t="card" data-aos="zoom-in-up" data-aos-duration="500">
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


                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transform transition duration-300 hover:scale-110">Click Me!</button>

                        </a>
                    </div>
                </div>
                    </div>
                </div>
            </div>


        </>
    )
}

