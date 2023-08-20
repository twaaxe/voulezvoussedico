import React from 'react'
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



function Sidebar() {
    return (

        <Col id="sideBar" sm={2} md={2}>
            {/* <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                </Row>
            </Tab.Container> */}

            <ListGroup variant="flush" defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3"  >
                    Link 3
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                    Link 4
                </ListGroup.Item>
                <ListGroup.Item action href="#link3"  >
                    Link 5
                </ListGroup.Item>
            </ListGroup>
        </Col>

    )
}

export default Sidebar
