import React, { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { flushSync } from 'react-dom';

import './LoginUser.css';

export default function LoginUserButton(displayColor) {

  const[headerText, setHeaderText] = useState([]);
  const[formFields, setFormFields] = useState([]);
  const[FooterText, setFooterText] = useState([]);

  useEffect(() => {

    // TODO
    // Code to load the Display-Text for the CTA from the API
    // This needs CORS to be configured!
    // https://bbackendapi.azurewebsites.net/api/betway/settings/ctalogin

    fetch('https://bbackendapi.azurewebsites.net/api/betway/settings/ctalogin', 
    {
        method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
      .then((res) => res.json())
      .then((data) => {
        setHeaderText(data.headerText);
        setFormFields(data.formFields);
        setFooterText(data.footerText);
      })
      .catch((err) => {
          console.log(err.message);
          // alert(err.message);
      });

  });

  const [show, setShow] = useState(false);  // https://react.dev/reference/react/useState

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[realusername, setRealusername] = useState ("");

  const[successfulllogin, setSuccessfulllogin] = useState(false);
  const[feedbackMessage, setFeedbackMessage] = useState("");

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

  const handleLoginUser = (e) => 
  {

      e.preventDefault();
      e.stopPropagation();

      // This needs CORS to be configured!
      // Works with (harper.lee@gmail.com) & (Syntax-10)
      fetch('https://bbackendapi.azurewebsites.net/api/betway/login', 
      {
          method: 'POST',
          body: JSON.stringify(
            {
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
           // console.log(data);
           if(data.status==="Success") 
            {
              // Needs SERIOUS reworking...
              flushSync(() => {
                setFeedbackMessage("");
                setSuccessfulllogin(true);
                setRealusername(data.message);
                setShow(false);
                handleClose();
              });
            }
            else
            {
              flushSync(() => {
                setFeedbackMessage(data.message+ "!");
              });
            }
           
        })
        .catch((err) => {
           console.log(err.message);
           // alert(err.message);
        });

  };

  return (
    <>

      <Button id="loginbutton" variant="success" onClick={handleShow} >
        Login
      </Button>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton >

            <div class="col-12" >
                <h3 class="modal-title w-100 text-center">Login</h3>
                <h6 class="modal-title w-100 text-center">New customer?&nbsp;<a id="loginanchorlink" href='#'>Register here</a></h6>
            </div>

        </Modal.Header>
        
        <Modal.Body>

          <Form onSubmit={handleLoginUser} >

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
          <div class="d-flex col-12 justify-content-center loginfeedback">  
            <h6>{feedbackMessage}</h6>
          </div>
        </Modal.Footer>
      </Modal>
      
      <Modal show={successfulllogin} onHide={handleCloseAll} centered >
        
        <Modal.Header>
          <div class="col-12" >
              <h3 class="modal-title w-100 text-center">Success</h3>
          </div>       
        </Modal.Header>
        
        <Modal.Body>

        <div class="d-flex col-12 justify-content-center" >
              <h1>{`Welcome, ${realusername}`}</h1>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <div class="d-flex col-12 justify-content-center ">
                <Button className="closeButton" variant="success"  onClick={handleCloseAll} >Continue</Button>
          </div>        
        </Modal.Footer>
      </Modal>

    </>
  );
}


