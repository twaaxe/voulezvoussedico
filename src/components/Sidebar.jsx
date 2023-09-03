import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
    return (
        <>
            <ListGroup variant="flush" className='text-center fw-semibold'>
                <ListGroup.Item action href="google.com" target="_blank">
                    Produtti per cappelli
                </ListGroup.Item>
                <ListGroup.Item action href="google.com" target="_blank">
                    attrezatura per cappelli
                </ListGroup.Item>
                <ListGroup.Item action href="google.com" target="_blank">
                    prodotti per estetica
                </ListGroup.Item>
                <ListGroup.Item action href="google.com" target="_blank">
                    attrezatura per estetica
                </ListGroup.Item>
                <ListGroup.Item action href="google.com" target="_blank">
                    ricostruzione unghie
                </ListGroup.Item>
                <ListGroup.Item>
                    kiuhi
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default Sidebar;
