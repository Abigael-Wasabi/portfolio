
import React from 'react';
import {Row,Col, Container} from 'react-bootstrap';
import SkillRow from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/boutMe';
import Projects from './components/projects';
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
        { icon: vueIcon, percentage: 40 },
        { icon: mysqlIcon, percentage: 40 },
        { icon: mongoDBIcon, percentage: 40 },
        { icon: nodeIcon, percentage: 50 },
        { icon: phpIcon, percentage: 40 },
        { icon: laravelIcon, percentage: 40 },
        { icon: androidIcon, percentage: 30 },
        { icon: KotlinIcon, percentage: 30 },
          
    ];
  return (
    <Container style={{padding:'15px', fontFamily:'cursive'}}>
    <Row style={{backgroundColor:'#F5C002',border:'1px solid #000', borderRadius:'5px'}}>
        <About/>
    </Row>
    
    <Row style={{backgroundColor:'white',border:'1px solid #f5c002',borderRadius:'5px'}}>
    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center', fontFamily:'roman'}}>
            <b>MY STACK</b>
      </div> 
            <SkillRow skills={skillsData}/>
    </Row>
    <Row style={{backgroundColor:'black',color:'#f5c002',border:'1px solid salmon',borderRadius:'5px'}}>
     <Projects/>
    </Row>
    <Row style={{backgroundColor:'gray',border:'1px solid #f5c002',borderRadius:'5px'}}>
        <Col style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            Reach out to me
        </Col>
        <Col style={{textAlign:'center'}}>
            <Contact/>
        </Col>
    </Row>
    <Footer/>
    </Container>
  )
};

export default App;