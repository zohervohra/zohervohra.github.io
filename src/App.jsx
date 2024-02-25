
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
  const gradient = {
    backgroundColor: '#2d3436' ,
    backgroundImage: 'linear-gradient(270deg,  #2d3436 0%, #000000 80%)'
    
  }
  const gradientStyle = {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient( 90deg, #2d3436 0%, #000000 74%)' // You can adjust colors and angles as per your preference
  };
  const revGradientStyle = {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(180deg,  #000000 74%, #2d3436 0%)' // You can adjust colors and angles as per your preference
  };
 
  return (
    // <div style={{backgroundColor:"#0D0A14"}}> 
     <div className='pattern7'>
      <Navbar/>
      <Element ><Home /></Element>
      <Element name='About' ><About /></Element>
      <Element name='Skills' ><Skills /></Element>
      <Element name='Education' ><Education/></Element>
      <Element name='Projects' ><Projects/></Element>
      <Footer/>
    </div>
  )
}

export default App
