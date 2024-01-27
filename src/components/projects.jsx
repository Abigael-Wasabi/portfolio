import React from 'react'
import { Col } from 'react-bootstrap';

function Projects() {
  return (
    <>
      <Col style={{textAlign: 'center', display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
            MY BLUEPRINTS
        </Col>
        <Col>
          <a href="vpms">VEHICLE PARKING MANAGEMENT SYSTEM</a><br></br>
          <a href="whta">WHTA NETWORKS WEBSITE</a>
        </Col>
    </>
  )
};

export default Projects;


