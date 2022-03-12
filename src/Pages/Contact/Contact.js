import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { Form, Button, FormControl } from "react-bootstrap";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    document.getElementById('FormContact').style.display='none';
    document.getElementById('afterSubmit').style.display='block';
    e.preventDefault();

    emailjs.sendForm('service_j07p02b', 'Portfolio', form.current, 'c5Y7sERr7ycnMg0XQ') //c5Y7sERr7ycnMg0XQ
      .then((result) => {
          console.log(result.text);          
      }, (error) => {        
          console.log(error.text);          
      })};

  const sendanotheremail=()=>{
    document.getElementById('FormContact').style.display='block';
    document.getElementById('afterSubmit').style.display='none';
  }
  

  return (

    <div className="container contact_section" id="Contact">
      <h2 class="contact_heading">
        <span>CONTACT</span>
      </h2>
      <div id="FormContact">
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formFullName" >
            <Form.Label className='ct-1 fs-3'>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" name="user_name" required className='bkform'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='ct-2 fs-3'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email" required className='bkform'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label className='ct-3 fs-3'>Message</Form.Label>
            <FormControl as="textarea" aria-label="message" name="message"  placeholder="Enter Message" required className='bkform'/>
            </Form.Group>
          <Button variant="danger" type="submit" value="Send" >
            Send Message
          </Button>
        </Form>
      </div>
      <div id="afterSubmit">
        <h1 className='my-4'>Thank You</h1>
        <h2 className='my-4'>Your message has been successfully sent, i'll reply as soon as possible.</h2>
        <Button className='mt-5' variant="danger" onClick={sendanotheremail}>
            Send another Email
          </Button>
      </div>
    </div>
  );
}

export default Contact;
