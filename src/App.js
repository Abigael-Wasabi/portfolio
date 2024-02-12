import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
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

function App() {
  const skillsData = [
    { icon: htmlIcon, percentage: 90 },
    { icon: cssIcon, percentage: 90 },
    { icon: bs5Icon, percentage: 90 },
    { icon: tailwindIcon, percentage: 50 },
    { icon: jsIcon, percentage: 60 },
    { icon: reactIcon, percentage: 80 },
    { icon: vueIcon, percentage: 60 },
    { icon: mysqlIcon, percentage: 40 },
    { icon: mongoDBIcon, percentage: 40 },
    { icon: nodeIcon, percentage: 50 },
    { icon: phpIcon, percentage: 40 },
    { icon: laravelIcon, percentage: 40 },
    { icon: androidIcon, percentage: 30 },
    { icon: KotlinIcon, percentage: 30 },
  ];

  return (
    <Container style={{ padding: '15px',maxWidth:'900px', background: 'linear-gradient(135deg, #8ED6ff, #aa336a)' }}>
      <hr></hr>
      <Row>
        <Col>
          <About />
        </Col>
        <Col>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <b>MY STACK</b>
        </div>
        <SkillRow skills={skillsData} />
        </Col>
      </Row><hr></hr>

      
      <Row>
        <Col>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <b>SERVICE REPERTOIRE</b>
        </div>
        <Services/>
        </Col>
      </Row><hr></hr>

      <Row style={{ backgroundColor: 'transparent'}}>
        <Col>
        <Projects />
        </Col>

      
        <Col style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <b>Reach out to me</b>
          <Contact />
        </Col>
      </Row><hr></hr>

      <Footer />
    </Container>
  )
};

export default App;