import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'

const Wrapper = (Component) =>
    function HOC() {
        <Container className="mainContent my-5 p-5 contentContainer">

            <Row>
                <Col className="sideBar" sm={2} md={2}>
                    <Sidebar />
                </Col>


                <Col className="mainContent" sm={10} md={10} >
                    <Component />
                </Col>
            </Row>
        </Container>

    }

export default Wrapper
