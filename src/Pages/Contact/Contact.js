import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { Form, Button, FormControl } from "react-bootstrap";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j07p02b', 'Portfolio', form.current, 'c5Y7sERr7ycnMg0XQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })};
  

  return (

    <div className="container contact_section" id="Contact">
      <h2 class="contact_heading">
        <span>CONTACT</span>
      </h2>
      <div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" name="user_name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="user_email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
            <FormControl as="textarea" aria-label="message" name="message"  placeholder="Enter Message"/>
            </Form.Group>
          <Button variant="danger" type="submit" value="Send">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
