import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {setCurrentYear(new Date().getFullYear());}, []);

  return (
    <>
      <p style={{textAlign:'center'}}>&copy; {currentYear} Abiwasabi. All Rights Reserved.</p>
    </>
  );
};

export default Footer;