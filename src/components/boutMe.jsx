import React from 'react';
import { Col } from 'react-bootstrap';


function About() {
let imgsrc;imgsrc=require('../assets/me.jpg');
  return (
    <>
      <Col>
           <b><p style={{fontFamily:'times new roman', textAlign: 'center'}}>Hello there</p></b>
           <b><p style={{textAlign: 'center'}}>I'm <u>WASABI ABIGAEL</u></p></b>
           <b><p style={{textAlign: 'center'}}>Full Stack Web Developer</p></b>
           <b><p style={{textAlign: 'center'}}>Android App Developer</p></b>
            <div style={{textAlign: 'center'}}>Passionate about coding and software development,
            I enjoy the ultimate portability of a tech career, since wiith the right skill you
            can wotk for any company worldwide. I'm keen on detail and love learning new things.
            Skating and playing chess are my hobbies, while staying current with the latest tech
            trends keeps me engaged. 
            </div>
        </Col>
        <Col>
        <img style={{width: '400px', height: '400px', borderRadius:'50%'}} src={imgsrc} alt="me"></img>
        </Col>
    </>
  )
}

export default About;