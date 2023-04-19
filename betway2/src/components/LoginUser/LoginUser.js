import React, { useState, useEffect, useLayoutEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { flushSync } from 'react-dom';

import './LoginUser.css';

export default function LoginUserButton({baseColor, buttonText}) {

  const[headerText, setHeaderText] = useState([]);
  const[formFields, setFormFields] = useState([]);
  const[FooterText, setFooterText] = useState([]);
  const[WelcomeUserText, setWelcomeUserText] = useState([]);

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
        setWelcomeUserText(data.welcomeUser);
      })
      .catch((err) => {
          console.log(err.message);
      });

      // setTimeout(applyColors(baseColor), 100000);

  },[]);

  useLayoutEffect(() => {

    // setTimeout(applyColors(baseColor), 5000);

});

  const [show, setShow] = useState(false);  // https://react.dev/reference/react/useState

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[realusername, setRealusername] = useState ("");

  const[successfulllogin, setSuccessfulllogin] = useState(false);
  const[feedbackMessage, setFeedbackMessage] = useState("");

  function applyColors(ctaColor)
    {
      document.getElementById("loginanchorlink").style.color = ctaColor;
      document.getElementById("loginsubmitbutton").style.backgroundColor = ctaColor;
      document.getElementById("loginsubmitbutton").style.borderColor = ctaColor;
      document.getElementById("loginanchorforgot").style.color = ctaColor;      
    }

  function handlePasswordChange(e)
    {
      setPassword(e.target.value);
    }

  function handleUsernameChange(e)
    {
      setUsername(e.target.value);
      applyColors(baseColor);
    }

  const handleCloseAll =() =>
    { 
      setShow(false);
      setSuccessfulllogin(false);
    }

  const handleClose = () => 
    {setShow(false)};

  const handleShow = () => 
    {
      setShow(true);
    };

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

              document.getElementById("closeButton2").style.backgroundColor = baseColor;
              document.getElementById("closeButton2").style.borderColor = baseColor;

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
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose} centered >
        <Modal.Header closeButton >

            <div class="col-12" >
                <h3 class="modal-title w-100 text-center">{headerText[0]}</h3>
                <h6 class="modal-title w-100 text-center">{headerText[1]}&nbsp;<a id="loginanchorlink" href='#'>{headerText[2]}</a></h6>
            </div>

        </Modal.Header>
        
        <Modal.Body>

          <Form onSubmit={handleLoginUser} >

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{formFields[0]}</Form.Label>
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
              <Form.Label>{formFields[1]}</Form.Label>
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
                    <div><Button disabled={successfulllogin}  id="loginsubmitbutton" type="submit" className="loginButton" variant="success"  >{FooterText[0]}</Button></div>
                </div>
                <div class="d-flex justify-content-center">
                    <div>
                        <a id="loginanchorforgot" href="#">{formFields[1]}</a>
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
              <h3 class="modal-title w-100 text-center">{WelcomeUserText[0]}</h3>
          </div>       
        </Modal.Header>
        
        <Modal.Body>

        <div class="d-flex col-12 justify-content-center" >
              <h1>{`${WelcomeUserText[1]}, ${realusername}`}</h1>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <div class="d-flex col-12 justify-content-center ">
                <Button className="closeButton" id= "closeButton2" variant="success"  onClick={handleCloseAll} >{WelcomeUserText[2]}</Button>
          </div>        
        </Modal.Footer>
      </Modal>

    </>
  );
}


