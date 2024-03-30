import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../App.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {setCurrentYear(new Date().getFullYear());}, []);

  return (
    <>
      <i><p style={{textAlign:'center'}}>&copy; {currentYear} Abiwasabi. All Rights Reserved.</p></i>
      {/* <div style={{textAlign:'center'}} className='social'>
          <a target='_blank' href="mailto:abiwasabi03@gmail.com" rel="noreferrer">
                    <i className="fas fa-envelope logos"></i>
          </a>
          <a target='_blank' href="mailto:abiwasabi03@gmail.com" rel="noreferrer">
                    <i className="fas fa-phone logos"></i>

          </a>
          <a target='_blank' href="mailto:abiwasabi03@gmail.com" rel="noreferrer">
                    <i className="fab fa-linkedin logos"></i>

          </a>
          <a target='_blank' href="mailto:abiwasabi03@gmail.com" rel="noreferrer">
                    <i className="fab fa-github logos"></i>

          </a>
      </div> */}
    </>
  );
};

export default Footer;