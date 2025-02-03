import React from 'react'
import { Row } from 'react-bootstrap';

function Projects() {
  return (
    <>
      <Row style={{textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent: 'center', fontFamily:'cursive', fontSize:'12px'}}>
          <b>MY BLUEPRINTS</b>
          <><a target='_blank' href="https://kicksemporium.netlify.app" rel="noreferrer">(COOL KICKS)sneaker shop</a></><br></br>
          <><a target='_blank' href="https://swiftpark-u-imain.vercel.app/" rel="noreferrer">VEHICLE PARKING MANAGEMENT SYSTEM</a></><br></br>
          <><a target='_blank' href="https://whtanetworks.com/" rel="noreferrer">WHTA NETWORKS WEBSITE</a>
          {/* (in collaboration with other developers) */}</>

          <><a target='_blank' href="https://www.shopartisanduka.com/" rel="noreferrer">ARTISAN DUKA</a></>
          <br></br>
          {/* (ALL ARE STILL IN DEVELOPMENT) */}
          {/* <pp style={{fontSize: '12px', marginTop: '100px'}}><i>reach out incase of a glitch</i></pp> */}
        </Row>
    </>
  )
};

export default Projects;


