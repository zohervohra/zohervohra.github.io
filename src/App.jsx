
import './assets/main.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education'
import { Link  , Element} from 'react-scroll';
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Skills from './Components/Skills'


function App() {

  return (
    // <div style={{backgroundColor:"#0D0A14"}}> 
    <>
    <div className='pattern7'>
       <Navbar/>
      <Element name='Home'><Home /></Element>
      <Element name='About' ><About /></Element>
      <Element name='Skills' ><Skills /></Element>
      <Element name='Education' ><Education/></Element>
      <Element name='Projects' ><Projects/></Element>
      <Footer/>
    </div>
    </>
  )

}

export default App
