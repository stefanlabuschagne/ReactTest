import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './SignupUser.css';

export default function SignupUserButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false)};
  const handleShow = () => 
  {setShow(true)};

  return (
    <>

      <Button Class="xxx" onClick={handleShow}>
        Sign up
      </Button>

    </>
  );
}


