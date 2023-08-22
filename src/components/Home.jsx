import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { Container, Row, Col } from 'react-bootstrap'

// import { Wrapper } from '../hoc'

function Home() {
    return (
        <Container className="mainContent my-5 contentContainer">
            <Row>
                <Col className="sideBar" sm={2} md={2}>
                    <Sidebar />

                </Col>


                <Col className="mainContent" sm={10} md={10} >
                    <MainContent />


                </Col>

            </Row>
        </Container>
    )
}

export default Home
