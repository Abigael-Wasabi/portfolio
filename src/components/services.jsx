import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../App.css';

function Services() {
  let imgsrc = require('../assets/webdev.jpg');
  let srcimg = require('../assets/andrdev.png');
  let imgs = require('../assets/designweb.png');

  return (
    <Row className='justify-content-center'>
     
        <Col className='text-center col-container'>
          <div>
            <img style={{borderRadius:'50%', width:'100px', height:'100px'}} src={imgsrc} alt="web dvlpmt"></img>
          </div>
          <h2 className="text-center text-content">WEB DEVELOPMENT</h2>
          <text className="text-gray-700 text-center text-content">I specialize in crafting dynamic and responsive websites 
          and web applications tailored to meet your specific needs. Using a diverse range of programming 
          languages and frameworks. I bring your vision to life with functionality and style</text>
        </Col>

        <Col className='text-center col-container'>
          <div>
          <img style={{borderRadius:'50%', width:'100px', height:'100px'}} src={imgs} alt="web design"></img>
          </div>
          <h2 className="text-center text-content">WEB DESIGN</h2>
          <text className="text-gray-700 text-center text-content">I focus 
          on creating visually appealing and intuitive interfaces that engage your audience. Leveraging tools 
          like Figma, I design seamless and user-friendly layouts that effectively communicate your brand's 
          identity and message</text>
        </Col>

        
        <Col className='text-center col-container'>
          <div>
          <img style={{borderRadius:'50%', width:'100px', height:'100px'}} src={srcimg} alt="andr dvlpmt"></img>
          </div>
          <h2 className="text-xl font-bold text-center mb-2 text-content">ANDROID DEVELOPMENT</h2>
          <text className="text-gray-700 text-center text-content">Transform your ideas into powerful Android applications 
          with my expertise in Kotlin programming language. Whether you need a sleek mobile app for your
          business or a feature-rich solution for your users, I develop custom Android applications 
          that combine innovation, functionality, and performance</text>
        </Col>
     
    </Row>
  );
}

export default Services;
