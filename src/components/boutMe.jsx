import React from 'react';
import portf from '../assets/portf.jpg';
import '../App.css';


function About() {
  return (
        <>
         <div style={{ textAlign: 'center', marginBottom: '20px',
            background: 'linear-gradient(135deg, #8ED6ff)', 
            }}>
           <img 
             src={portf} 
             alt="Portfolio" 
             style={{ width: '300px',
              transform: 'rotate(-10deg)', // Tilting
              transition: 'transform 0.3s ease-in-out',
              mixBlendMode: 'multiply', // Blends image with the background
              }} 
            />
           <ul
        style={{
          textAlign: 'center',
          marginTop: '-35px',
          marginLeft: '-25px',
          transform: 'rotate(-10deg)', // Tilts the text
          fontFamily: 'cursive',
          fontSize: '10px'
        }}
      >
        <p>Full Stack Web Developer, Android App Developer</p>
      </ul>
           </div>

           <b><p style={{textAlign: 'center', fontFamily:'cursive'}}>Hello there!</p></b>
           <b><p style={{textAlign: 'center', marginTop:'-20px', fontFamily:'cursive'}}>WASABI ABIGAEL</p></b>
            <div style={{marginTop:'-20px', textAlign:'center', 
                        fontFamily:'cursive',
                        fontSize:'12px',}}>Passionate about coding and software development.
            I enjoy the ultimate portability of a tech career, since with the right skill you
            can work for any company worldwide.<br></br> I'm keen on detail and love learning new things,
            therefore I adapt easily to unfamiliar tasks.<br></br>Absolutely! Coding and software development 
            skills empower me to create solutions that can have a positive impact on humanity. <br></br>
            Skating and playing chess are my hobbies, while staying current with the latest tech
            trends keeps me engaged. 
            </div>
        </>
  
  )
}

export default About;