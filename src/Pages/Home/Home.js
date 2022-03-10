import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='text-light' id="Home">
        
        <div className='container textblock'>
            <div className='homeContent'>
                <div className='text1'>
                <p>Hi there, I'm</p>
                </div>
                <div className='text2'>
                <p className='name'>Raghav Maskara</p>
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
                <div className='text6'>
                  <a className='btn btn-danger mx-5' href="https://bit.ly/RM-res21" target="_blank" rel="noopener noreferrer">Resume</a>
                  <a className='btn btn-danger mx-5' href='#Contact'>Let's Talk</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home