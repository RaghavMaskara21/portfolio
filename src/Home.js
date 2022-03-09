import React from 'react'
import './Home.css'

import Header from './Components/Header'
function Home() {
  return (
    <div className='bg-dark text-light'>
        <Header/>
        
        <div className='container'>
            <div className='homeContent'>
                <div className='text1'>
                <p>Hi there, I'm</p>
                </div>
                <div className='text2'>
                <p>Raghav Maskara</p>
                </div>
                <div className='text3'>
                <p>I make awesome websites</p>
                </div>
                <div className='text4'>
                <p>Full stack web developer</p>
                </div>
                <div className='text5'>
                <p>Based in Surat, India.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home