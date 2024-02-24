import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();


export default function Education() {
  return (
    <div>
        <section className="w-full py-12 md:py-24 lg:py-32  xl:flex xl:justify-center" >
      <div className="container grid items-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Education</h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            My educational background and qualifications.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-4xl lg:grid-cols-3" data-aos="fade-right"  data-aos-duration="1000">
        

          <div className="grid gap-1" >
            <h3 className="text-lg font-bold text-secondary">Bachelor's Degree in Information Technology</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Pursuing Btech in IT from Veermata Jijabai Technological Institute (VJTI), Mumbai. Expected graduation in 2027.
            </p>
          </div>
       
          <div className="grid gap-1">
            <h3 className="text-lg font-bold text-secondary">Higher Secondary (12th Grade)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Matoshree Prabodhini Junior College of Science, Thane , Scored 91.40% in 2023.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold text-secondary">Secondary (10th Grade)</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            KC Gandhi English High School, Kalyan. Scored 90.40% in 2021.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
