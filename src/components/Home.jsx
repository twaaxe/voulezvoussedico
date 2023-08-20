import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <Container className="mainContent my-5 p-5 contentContainer">
            <Row>
                <Col id="sideBar" sm={2} md={2}>
                    <Sidebar />

                </Col>


                <Col id="mainContent" sm={10} md={10} className='p-x'>
                    <MainContent />


                </Col>

            </Row>
        </Container>
    )
}

export default Home
