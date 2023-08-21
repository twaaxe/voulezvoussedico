import React from 'react'
import Sidebar from './Sidebar'
import { Container, Row, Col } from 'react-bootstrap'


function AboutUs() {
  return (
    <div>
      <Container className="mainContent my-5 p-5 contentContainer">
        <Row>
          <Col className="sideBar" sm={2} md={2}>
            <Sidebar />

          </Col>


          <Col className="mainContent my-5" sm={10} md={10} >

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem id delectus fugiat excepturi neque ratione dignissimos necessitatibus quidem aliquid harum aspernatur eos eveniet libero ipsum nulla, suscipit quis vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem id delectus fugiat excepturi neque ratione dignissimos necessitatibus quidem aliquid harum aspernatur eos eveniet libero ipsum nulla, suscipit quis vel?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem id delectus fugiat excepturi neque ratione dignissimos necessitatibus quidem aliquid harum aspernatur eos eveniet libero ipsum nulla, suscipit quis vel?</p>



          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default AboutUs
