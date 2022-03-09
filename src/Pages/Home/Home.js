import React from 'react'
import './Home.css'

import Header from '../../Components/Header'
function Home() {
  return (
    <div className='container text-light'>
        <Header/>
        
        <div className='container textblock'>
            <div className='homeContent'>
                <div className='text1 fs-5'>
                <p>Hi there, I'm</p>
                </div>
                <div className='text2'>
                <p className='name'>Raghav Maskara</p>
                </div>
                <div className='text3 fs-2'>
                <p>I make awesome websites</p>
                </div>
                <div className='text4 fs-6'>
                <p>Full stack web developer</p>
                </div>
                <div className='text5 fs-6'>
                <p>Based in Surat, India.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home