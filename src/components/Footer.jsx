import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import '../style/Footer.css'



function Footer() {
    return (
        <div id="footer">
            <Container >
                <Row className='d-flex justify-content-center  align-items-center'>
                    <Col md={6} className='text-center'>
                        <p>
                            info@voulezvous.it<br />
                            +39 0437 853103 <br />
                        </p>
                    </Col>

                    <Col md={6} className='text-center'>
                        <p>
                            via Feltre, 81
                            <br />
                            32036 Sedico (BL)
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
