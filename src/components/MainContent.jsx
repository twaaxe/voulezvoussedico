import React from 'react'
import { Col, Container } from 'react-bootstrap';


function MainContent() {
    return (
        <Col id="mainContent" sm={10} md={10} className='p-x'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, animi voluptates hic.</p>
            <p> voluptatum rem maxime earum dolor unde fugiat, dolorem exercitationem magni numquam. Iste officiis omnis impedit, quibusdam assumenda provident</p>
            <Container className="d-flex justify-content-evenly my-5">
                <h3><a href="google.com">mark</a></h3>
                <h3><a href="google.com">mark</a></h3>
                <h3><a href="google.com">mark</a></h3>


                <h3><a href="google.com">mark</a></h3>
                <h3><a href="google.com">mark</a></h3>
                <h3><a href="google.com">mark</a></h3>

            </Container>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, animi voluptates hic.</p>
        </Col>
    )
}

export default MainContent
