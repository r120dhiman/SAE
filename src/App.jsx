import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Team from './components/Team'
import Advancing from './components/Advancing'
import Displaycard from './components/Displaycard'
import Gap from './components/Gap'
import Sponsers from './components/Sponsers'
import Footer from './components/Footer'
import uparrow from "./images/uparrow.png"


function App() {

  return (
    <>
      <div className='relative'>
        <div id="navbar">
          <Navbar></Navbar></div>
        <Team></Team>
        <Gap></Gap>
<Advancing></Advancing>
        <Gap></Gap>
        <Displaycard></Displaycard>
        <Sponsers></Sponsers>
        <Footer></Footer>
        <button
      onClick={() => {
        const element = document.getElementById('navbar');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="fixed bottom-4 right-4 shadow-lg bg-white w-10 h-10 rounded-full  duration-30ms"
    >
      <img src={uparrow}  className='p-2' alt="" />
    </button>
        </div>
    </>
  )
}

export default App
