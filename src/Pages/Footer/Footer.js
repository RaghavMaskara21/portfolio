import React from 'react'
import './Footer.css'
import { IoLogoGithub, IoLogoFacebook,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin } from 'react-icons/io5';
import {IoIosGlobe} from 'react-icons/io';

function Footer() {
  return (
    <div className='container footer_section'>
      <hr className='foothr'></hr>
      <div className='container'>
        <div className='row'>
      <div className='ico col-lg-6'>
        <a href='https://github.com/RaghavMaskara21' target="_blank" rel="noreferrer" className=' ft-ico'> <IoLogoGithub /></a>
        <a href='https://www.facebook.com/maskararaghav/' target="_blank" rel="noreferrer" className=' ft-ico'> <IoLogoFacebook /></a>
        <a href='https://twitter.com/MaskaraRaghav' target="_blank" rel="noreferrer" className=' ft-ico'> <IoLogoTwitter /></a>
        <a href='https://www.instagram.com/raghavmaskara/' target="_blank" rel="noreferrer" className=' ft-ico'> <IoLogoInstagram /></a>
        <a href='https://www.linkedin.com/in/raghavmaskara/' target="_blank" rel="noreferrer" className=' ft-ico'> <IoLogoLinkedin /></a>
        <a href='https://raghavmaskara.shootingspeed.com/' target="_blank" rel="noreferrer" className=' ft-ico'> <IoIosGlobe /></a>
      </div>
      <p className='ft-txt my-5 fs-4 col-lg-6'>© 2025 Raghav Maskara</p>
      </div>
      </div>
      </div>
  )
}

export default Footer