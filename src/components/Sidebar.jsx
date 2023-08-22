import React from 'react'
import { Col, ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';



function Sidebar() {
    return (

        <>
            <ListGroup variant="flush" className='text-center  fw-semibold'>
                <a href="google.com" target="_blank">
                    <ListGroup.Item >
                        Produtti per cappelli
                    </ListGroup.Item>
                </a>
                <a href="google.com" target="_blank">
                    <ListGroup.Item action href="#link2" >
                        attzetura per cappelli
                    </ListGroup.Item>
                </a>
                <a href="google.com" target="_blank">
                    <ListGroup.Item action href="#link3"  >
                        prodotti per estetice
                    </ListGroup.Item>
                </a>
                <a href="google.com" target="_blank">
                    <ListGroup.Item action href="#link4" >
                        attzetura per estetica
                    </ListGroup.Item>
                </a>
                <a href="google.com" target="_blank">
                    <ListGroup.Item action href="#link5"  >
                        ricostruczione unighe
                    </ListGroup.Item>
                </a>
                <ListGroupItem>
                    kiuhi
                </ListGroupItem>
            </ListGroup>
        </>

    )
}

export default Sidebar
