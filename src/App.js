import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SkillRow from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/boutMe';
import Projects from './components/projects';
import Services from './components/services';
import './App.css';
import htmlIcon from './assets/htmlicon.png';
import cssIcon from './assets/cssicon.png';
import bs5Icon from './assets/bs5icon.png';
import sass from './assets/scss.png';
import tailwindIcon from './assets/tailwind.png';
import jsIcon from './assets/jsicon.png';
import reactIcon from './assets/react.webp';
import vueIcon from './assets/vue.png';
import mysqlIcon from './assets/mysql.png';
import mongoDBIcon from './assets/MongoDB-Logo.jpg';
import nodeIcon from './assets/node.png';
import phpIcon from './assets/php.png';
import laravelIcon from './assets/laravel.png';
import androidIcon from './assets/andr.png';
import KotlinIcon from './assets/Kotlin_Icon.png';
import stackImage from './assets/stack.jpg';

function App() {
  const skillsData = [
    { icon: htmlIcon},
    { icon: cssIcon},
    { icon: bs5Icon},
    { icon: tailwindIcon},
    { icon: sass},
    { icon: jsIcon},
    { icon: reactIcon},
    { icon: vueIcon},
    { icon: mysqlIcon},
    { icon: mongoDBIcon},
    { icon: nodeIcon},
    { icon: phpIcon},
    { icon: laravelIcon},
    { icon: androidIcon},
    { icon: KotlinIcon},
  ];

  return (
    <Router>
    <Container style={{ padding: '15px',fontFamily:'cursive', maxWidth:'500px',height:'100vh', background: 'linear-gradient(135deg, #8ED6ff, #aa336a)' }}>
      <nav style={{ textAlign: 'center',fontSize:'12px', marginBottom:'-10px' }}>
          <Link style={{marginRight:'5px'}} to="/">About</Link>
          <Link style={{marginRight:'5px'}} to="/skillrow">TechStack</Link>
          <Link style={{marginRight:'5px'}} to="/services">Services</Link>
          <Link style={{marginRight:'5px'}} to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
      </nav>
      <hr></hr>

      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skillrow" element={<SkillRow skills={skillsData}/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <hr></hr>

      
    

      <Footer style={{
        position:'fixed',
        marginBottom:'0',
      }}/>
    </Container>
    </Router>
  )
};

export default App;