import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './LoginUser.css';

// IMPORTS THE SERVIVE THAT GETS THE URL AND AUTHENTICATES THE USER


export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false)};
  const handleShow = () => 
  {setShow(true)};

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
      
          <h3 class="modal-title w-100 text-center">Login</h3>

        </Modal.Header>
        
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username"
                autoFocus
                minLength={1}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=""
                minLength={10}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="success" >Login</Button><br/>
            <a href="#">Forgot Username/Password</a>

          </Form>
        </Modal.Body>
        <Modal.Footer>
   
        </Modal.Footer>
      </Modal>
    </>
  );
}


