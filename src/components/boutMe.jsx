import React from 'react';
import { Col } from 'react-bootstrap';
import '../App.css';


function About() {
// let imgsrc;imgsrc=require('../assets/me.jpg');
  return (
    <>
      <Col>
           <b><p style={{textAlign: 'center'}}>Hello there</p></b>
           <b><p style={{textAlign: 'center'}}>I'm WASABI ABIGAEL</p></b>
           <b><p style={{textAlign: 'center'}}>Full Stack Web Developer</p></b>
           <b><p style={{textAlign: 'center'}}>Android App Developer</p></b>
            <div style={{textAlign: 'center'}}>Passionate about coding and software development.
            I enjoy the ultimate portability of a tech career, since with the right skill you
            can work for any company worldwide.<br></br> I'm keen on detail and love learning new things,
            therefore I adapt easily to unfamiliar tasks.<br></br>Absolutely! Coding and software development 
            skills empower me to create solutions that can have a positive impact on humanity. <br></br>
            Skating and playing chess are my hobbies, 
            while staying current with the latest tech
            trends keeps me engaged. 
            </div>
        </Col>
        <Col>
        {/* <img style={{width: '400px', height: '400px', borderRadius:'50%'}} src={imgsrc} alt="me"></img> */}
        </Col>
    </>
  )
}

export default About;