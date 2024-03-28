import React from 'react'
import { Row } from 'react-bootstrap';

function Projects() {
  return (
    <>
      <Row style={{textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
          <b>MY BLUEPRINTS</b>
          <li><a target='_blank' href="https://kicksemporium.netlify.app" rel="noreferrer">(COOL KICKS)sneaker shop</a></li><br></br>
          <li><a target='_blank' href="https://swiftpark-u-imain.vercel.app/" rel="noreferrer">VEHICLE PARKING MANAGEMENT SYSTEM</a></li><br></br>
          <li><a target='_blank' href="https://whtanetworks.com/" rel="noreferrer">WHTA NETWORKS WEBSITE</a>(in collaboration with other developers)</li>
          <br></br>
          (ALL ARE STILL IN DEVELOPMENT)
          <pp style={{fontSize: '12px', marginTop: '100px'}}><i>reach out incase of a glitch</i></pp>
        </Row>
    </>
  )
};

export default Projects;


