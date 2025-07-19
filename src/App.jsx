import './App.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function App() {
  const movieWeb=()=>{
    window.open('https://movie-website-4jfg.vercel.app/',"_blank");
  }
  const DontClick=()=>{
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1","_blank");
  }
  const weatherapi=()=>{
    window.open("https://openweathermap.org/api","_blank");
  }
  const Github=()=>{
    window.open("https://github.com/mdfaheem23/Movie-Website","_blank");
  }
  const Instagram=()=>{
    window.open("https://www.instagram.com/mdfaheem_23_/","_blank");
  }
  const Linkedin=()=>{
    window.open("https://www.linkedin.com/in/muhammad-faheem-069362305","_blank");
  }
  const Mail=()=>{
    window.open()
  }
  useGSAP(()=>{
    gsap.from('.bird',{
      x:1150,
      duration:4,
      delay:0,
      yoyo:true,
      repeat:-1
    })
    let tl=gsap.timeline();
    tl.from('.name',{
      y:100,
      opacity:0,
      duration:0.5,
      delay:0.5,
      stagger:0.1,
      ease: "power4.out"
    },'a')
    tl.from('.cat',{
      opacity:0,
      y:400,
      duration:1,
      delay:0.4
    },'a')
    tl.from('.para1',{
      opacity:0,
      y:75,
      duration:0.4,
      delay:0.4
    })
    tl.from('.container',{
      opacity:0,
      y:800,
      duration:1,
      delay:0.5
    },'a')
    tl.from('.container1',{
      opacity:0,
      y:800,
      duration:1,
      delay:0.5
    },'a')
    tl.from('.container2',{
      opacity:0,
      y:800,
      duration:1,
      delay:0.5
    },'a')
   tl.from('.instagram',{
    opacity:0
   },'b')
   tl.from('.github',{
    opacity:0
   },'b')
   tl.from('.linkedin',{
    opacity:0
   },'b')
  })
  return (
    <>
      <div className='HeadName'>
        <img src="./bird.gif" className='bird'></img>
        <div className='wrap'>
        <div className='nameline'>
            <span className="name pixel">M</span>
            <span className="name pixel">O</span>
            <span className="name pixel">H</span>
            <span className="name pixel">A</span>
            <span className="name pixel">M</span>
            <span className="name pixel">M</span>
            <span className="name pixel">E</span>
            <span className="name pixel">D </span>
            <span className="name pixel">- </span>
            <span className="name pixel">F</span>
            <span className="name pixel">A</span> 
            <span className="name pixel">H</span>
            <span className="name pixel">E</span>
            <span className="name pixel">E</span>
            <span className="name pixel">M</span>
        </div>
        <div className='title-name'></div>
            <span className='pixel para1'>Web Developer</span>
          </div>
           
            <img className="cat" src="./cat.gif" alt="Its a Cat"/>
            {/* </div> */}
      </div>
      <div className='wrapper'>
      <div className="container">
        <h4 className="pixel">&nbsp;Movie Searching Website</h4>
        {/* <img src="./movie.svg" className='movie'></img> */}
        <button className="checkout pixel" onClick={movieWeb}>Check Out</button>
      </div>
      <div className="container1">
        <h4 className="pixel weatherfont">Weather Website made by Noob</h4>
        {/* <img src="./weather.png" className='weather'></img> */}
        <button className="checkout1 pixel" onClick={weatherapi}>Read About Weather Api</button>
      </div>
      <div className="container2">
        <h4 className="pixel">Seriously Dont Know What to Add</h4>
        <button className="checkout2 pixel" onClick={DontClick}>Don't Click This</button>
      </div>
      </div>
      <br/><br/><br/><br/><br/>
      <footer>
        <div className='footer'>
          <img src="./spiderman.gif" className='pixelimage'/>
          <div className='endingtext'>
            <h2 className='pixel text'>HELLO GUYZ MYSELF MOHAMMED FAHEEM <br/>I LOVE DOING FRONT-END WORK <br/>MY SKILLS ARE:<br/><br/>
            <img src="./react2.svg" className='react'/><span className='pixel white'>&nbsp;REACT</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="./js.svg" className='react'/><span className='pixel white'>&nbsp;JAVASCRIPT</span>&nbsp;&nbsp;
            <img src="./css.svg" className='react'/><span className='pixel white'>&nbsp;CSS</span>&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
            <img src="./html.svg" className='react'/><span className='pixel white'>&nbsp;HTML</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="./c.svg" className='react'/><span className='pixel white'>&nbsp;C</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="./c++.svg" className='react'/><span className='pixel white'>&nbsp;C++</span>&nbsp;&nbsp;
            <img src="./java.svg" className='react'/><span className='pixel white'>&nbsp;JAVA</span></h2>
          </div>
        <div className="icons">
        <img src="./github.png" className='github'onClick={Github}/>
        <img src="./instagram.svg" className='instagram'onClick={Instagram}/>
        <img src="./linkedin.svg" className='linkedin'onClick={Linkedin}/>
      </div>
        </div>
      </footer>
    
     
    </>
  )
}

export default App
