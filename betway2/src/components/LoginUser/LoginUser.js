import React, { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { flushSync } from 'react-dom';

import './LoginUser.css';

export default function LoginUserButton() {

  const [show, setShow] = useState(false);  // Surprisingly Easy https://react.dev/reference/react/useState
  // const [showwelcome, setShowWelcome] = useState(false); 

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[realusername, setRealusername] = useState ("");

  const[successfulllogin, setSuccessfulllogin] = useState(false);

  // Callback (Event Fired) when successfulllogin changes
  // useEffect ( ()=>{alert('successfulllogin updated')}  , [successfulllogin] )

  function handlePasswordChange(e)
  {
    setPassword(e.target.value);
  }

  function handleUsernameChange(e)
  {
    setUsername(e.target.value);
  }

const handleCloseAll =() =>
  { 
    setShow(false);
    setSuccessfulllogin(false);
  }

  const handleClose = () => 
    {setShow(false)};

  const handleShow = () => 
    {setShow(true)};

  // Submit Event handler method
  const validateAPI = (e) => 
  {

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
    }
    else
    {
        // Stop everything anyways
        e.preventDefault();
        e.stopPropagation();
    }

      // This needs CORS to be configured!
      fetch('https://bbackendapi.azurewebsites.net/api/betway/login', {
        method: 'POST',
        body: JSON.stringify({
           email: username,
           password: password,
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
     })
        .then((res) => res.json())
        .then((data) => {
           setUsername('');
           setPassword('');
           console.log(data);
           if(data.status==="Success") 
            {
              // Needs some reworking...
              flushSync(() => {
                setSuccessfulllogin(true);
                setRealusername(data.message);
                setShow(false);
                handleClose();
              });
            }

           
        })
        .catch((err) => {
           console.log(err.message);
           alert(err.message);
        });

  };

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

          <Form onSubmit={validateAPI} >

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Username"
                autoFocus
                value={username}
                onChange={handleUsernameChange}
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
                value={password}
                onChange={handlePasswordChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
     
            </Form.Group>
                <div class="d-flex justify-content-center">
                    <div><Button disabled={successfulllogin}  id="loginsubmitbutton" type="submit" className="loginButton" variant="success"  >Login</Button></div>
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

      <Modal show={successfulllogin} onHide={handleClose} centered >
        
        <Modal.Header>
          <div class="col-12" >
              <h3 class="modal-title w-100 text-center">Success</h3>
          </div>       
        </Modal.Header>
        
        <Modal.Body>

        <div class="d-flex col-12 justify-content-center">
              <h1>{`Welcome, ${realusername}`}</h1>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <div class="d-flex col-12 justify-content-center">
                <Button className="closeButton" variant="success"  onClick={handleCloseAll} >Continue</Button>
          </div>        
        </Modal.Footer>
      </Modal>

    </>
  );
}


