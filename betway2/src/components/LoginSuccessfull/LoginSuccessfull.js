import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './LoginUser.css';

// IMPORTS THE SERVIVE THAT GETS THE URL AND AUTHENTICATES THE USER
// import { fetchData } from './Service/apiService';


export default function WelcomeModal(props) {

  const handleClose = () => 
    {setShow(false)};

  const handleShow = () => 
    {setShow(true)};

  return (
    <>
      <Modal show onHide={handleClose} centered >
        
        <Modal.Header closeButton>
        </Modal.Header>
        
        <Modal.Body>

        <div class="d-flex col-12 justify-content-center">
              <h1>{`Welcome, ${props.userName}`}</h1>
              <Button className="closeButton" variant="success"  onClick={handleClose} >Close </Button>
        </div>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}


