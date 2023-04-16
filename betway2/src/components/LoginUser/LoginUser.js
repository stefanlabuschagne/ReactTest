import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import './LoginUser.css';

// IMPORTS THE SERVIVE THAT GETS THE URL AND AUTHENTICATES THE USER
// import { fetchData } from './Service/apiService';


export default function LoginUserButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false)};
  const handleShow = () => 
  {setShow(true)};

  function validateAPI()

  {}

     
    
    // Call The API Service to Validate the user and get his name Back
    /*
            useEffect(() => {
                fetchData()
                  .then(data => setData(data))
                  .catch(error => console.error(error));
              }, []);
    */
   

  return (
    <>

      <Button id="loginbutton" variant="success" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>

            <div class="col-12" >
                <h3 class="modal-title w-100 text-center">Login</h3>
                <h6 class="modal-title w-100 text-center">New customer?&nbsp;<a id="loginanchorlink" href='#'>Register here</a></h6>
            </div>

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
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=""
                minLength={8}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
                <div class="d-flex justify-content-center">
                    <div><Button id="loginsubmitbutton" type="submit" variant="success" onClick={validateAPI} >Login</Button></div>
                </div>

                <div class="d-flex justify-content-center">
                    <div>
                        <a id="loginanchorforgot" href="#">Forgot Username/Password</a>
                    </div>
                </div>          
            </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}


