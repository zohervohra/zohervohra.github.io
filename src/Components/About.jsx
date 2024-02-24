import React from 'react'

export default function About() {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32  xl:flex xl:justify-center">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 ">
                            I'm a passionate web developer with a love for creating stunning and user-friendly websites. My goal is
                            to bring digital visions to life and make the web a more beautiful place.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-4xl lg:grid-cols-3" data-aos='zoom-out-right ' data-aos-duration="500">
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold text-secondary">Front-end Expert</h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                I specialize in crafting elegant and responsive user interfaces using HTML, CSS, and JavaScript. I pay
                                attention to the details to ensure a seamless user experience.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold text-secondary">Creative Designer</h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                I have an eye for design and enjoy creating visually appealing websites. My design skills complement
                                my development expertise, allowing me to turn ideas into beautiful digital experiences.
                            </p>
                        </div>
                        <div className="grid gap-1">
                            <h3 className="text-lg font-bold text-secondary">Passionate Learner</h3>
                            <p className="text-base text-gray-500 dark:text-gray-400">
                                The web is constantly evolving, and I am committed to staying updated with the latest technologies and
                                best practices. I embrace new challenges and am always eager to expand my skill set.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
