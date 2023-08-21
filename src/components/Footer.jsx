import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <Container id='footer'>
            <Row >
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
    )
}

export default Footer
