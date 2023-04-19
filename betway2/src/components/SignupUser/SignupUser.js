import React, { useState } from 'react';

import './SignupUser.css';

export default function SignupUserButton({baseColor,buttonText}) {

  const [show, setShow] = useState(false);

  const handleClose = () => 
  {setShow(false)};
  const handleShow = () => 
  {setShow(true)};

  return (<div>
            <input 
              id="signupbutton" 
              type="Button" 
              Class="signupButton" 
              onClick={handleShow} 
              value={buttonText}
            />
          </div>  
  );
}


