import React from 'react'
import { Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



function Sidebar() {
    return (

        <>
            <ListGroup variant="flush" defaultActiveKey="#link1">
                <ListGroup.Item action href="gooele.com">
                    Produtti per cappelli
                </ListGroup.Item>
                <ListGroup.Item action href="#link2" >
                    attzetura per cappelli
                </ListGroup.Item>
                <ListGroup.Item action href="#link3"  >
                    prodotti per estetice
                </ListGroup.Item>
                <ListGroup.Item action href="#link4" >
                    attzetura per estetica
                </ListGroup.Item>
                <ListGroup.Item action href="#link5"  >
                    ricostruczione unighe
                </ListGroup.Item>
            </ListGroup>
        </>

    )
}

export default Sidebar
