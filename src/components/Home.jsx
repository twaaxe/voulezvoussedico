import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { Container, Row, Col } from 'react-bootstrap'

// import { Wrapper } from '../hoc'

function Home() {
    return (
        <Container className="mainContent my-5 contentContainer">
            <Row>
                <Col className="sideBar" sm={4} md={4}>
                    <Sidebar />

                </Col>


                <Col className=" " sm={8} md={8} >
                    <MainContent />


                </Col>

            </Row>
        </Container>
    )
}

export default Home
