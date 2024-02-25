import React from 'react'
import { Link } from 'react-scroll';
import linkedInLogo from '../assets/linkedInLogo.webp'
import { FaGithub , FaTwitter } from "react-icons/fa";


export default function Navbar() {
  return (

<div >
<header className="px-4 lg:px-6 py-4 sm:py-6 md:py-8 border-b border-black flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <a className="flex items-center space-x-2" href="#">
      
       
        <span className="font-semibold text-primary text-md sm:text-xl"> Zoher Vohra</span>
      </a>
    </div>
    <nav className=" hidden md:flex items-center gap-4 lg:gap-6 text-white ">
   
 
      <a className="text-md font-medium  hover:text-primary transition-colors duration-300" href="#">
      <Link to="About" smooth={true} duration={500}>About</Link>
        {/* About */}
      </a>
      <a className="text-md font-medium  hover:text-primary  transition-colors duration-300 " href="#">
      <Link to="Skills" smooth={true} duration={500}>Skills</Link>
      </a>
      <a className="text-md font-medium  hover:text-primary transition-colors duration-300" href="#">
      <Link to="Education" smooth={true} duration={500}>Education</Link>
      </a>
      <a className="text-md font-medium  hover:text-primary transition-colors duration-300" href="#">
      <Link to="Projects" smooth={true} duration={500}>Projects</Link>
      </a>
      {/* <a className="text-md font-medium " href="#">
        Contact
      </a> */}
    
    
    </nav>
    <div className="flex items-center space-x-2 ">
            <a href="https://github.com/zohervohra" className='px-1 sm:px-1 '>
              {/* <img src={<FaGithub/>} alt="" height='30px' width='30px'/> */}
              <FaGithub style={{color : "white"}} className=' h-6 w-6  sm:h-8 sm:w-8' /> 
            </a>
            <a href="https://www.linkedin.com/in/zoher-vohra-b5b9761b6/"  className='px-1 sm:px-1' >
            <img src={linkedInLogo} alt="" className=' h-6 w-6  sm:h-8 sm:w-8'/>
            </a>
            <a href="https://twitter.com/ZoVoHere"  className='px-1 max-sm:px-1 ' >
            <FaTwitter style={{color:'white' }} className=' h-6 w-6  sm:h-8 sm:w-8'/> 
            </a>
          </div>
  </header>
</div>
  )
}
