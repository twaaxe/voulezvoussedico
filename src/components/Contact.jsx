import React from 'react'
import Sidebar from './Sidebar'
import { Container, Row, Col } from 'react-bootstrap'

const ContactForm = () => (

    <form className="container w-75" action="" method="" id="formContainer">
        <h5 className="text-center fw-light">How can we help?</h5>

        <div className="row">
            <div className="col-md-6">
                <label htmlFor="name" className="form-label"> Name *</label>
                <input type="text" className="form-control" id="name" placeholder="Your name" required />
            </div>

            <div className="col-md-6">
                <label htmlFor="organisation" className="form-label"> Organisation *</label>
                <input type="text" className="form-control" id="organisation" placeholder="Your organisation" />
            </div>
        </div>

        <div className="row my-3">
            <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email * </label>
                <input type="email" className="form-control" id="email" placeholder="Your email address" required />
            </div>
        </div>

        <div className="row my-3">
            <label htmlFor="projectDescription" className="form-label">Project Description * </label>
            <div className="form-floating">
                <textarea className="form-control" id="projectDescription" style={{ height: '150px' }} required></textarea>
            </div>
        </div>

        <div className="row">
            <button type="submit" form="formContainer" value="Submit" id="submitButton" className="btn my-4 mb-5">Send Message</button>
        </div>
    </form>
)

function Contact() {
    return (
        <div>
            <Container className="mainContent my-5 p-5 contentContainer">
                <Row>
                    <Col className="sideBar" sm={2} md={2}>
                        <Sidebar />
                    </Col>


                    <Col className="mainContent" sm={10} md={10} >
                        <ContactForm />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Contact
