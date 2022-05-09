import React from 'react';
import { useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Modal from 'react-modal';


export default function Experiences(){
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
        <h1 className = "title">Experiences</h1>

        <Modal show={modalShow} onHide={() => setModalShow(false)}/></>
  );
}
