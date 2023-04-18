import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import './SignupUser.css';

export default function SignupUserButton({baseColor}) {

  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false)};
  const handleShow = () => 
  {setShow(true)};

  return (<div>
            <input id="signupbutton" type="Button" Class="xxx" onClick={handleShow} value="Sign up"/>
        </div>  
  );
}


