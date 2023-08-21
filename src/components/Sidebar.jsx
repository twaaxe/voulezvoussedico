import React from 'react'
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



function Sidebar() {
    return (

        <>
            <ListGroup variant="flush" defaultActiveKey="#link1">
                <ListGroup.Item action href="gooele.com">
                    Link 1
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                    Link 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3"  >
                    Link 3
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" >
                    Link 4
                </ListGroup.Item>
                <ListGroup.Item action href="#link5"  >
                    Link 5
                </ListGroup.Item>
            </ListGroup>
        </>

    )
}

export default Sidebar
