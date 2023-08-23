import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si';
import { FaHiking } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

function About() {
  return (
    <>
    <div className="aboutbox">
        <div className="divboxblue animate__animated animate__slideInLeft">
          <SiYourtraveldottv className='icontravel'/>
          <h1>Tours</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="divboxblue animate__animated animate__slideInRight">
          <FaHiking className='icontravel'/>
          <h1>HIKKING</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className="divboxblue animate__animated animate__slideInLeft">
          <BiWorld className='icontravel'/>
          <h1>Travel</h1>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
    </div>

    </>
  )
}

export default About