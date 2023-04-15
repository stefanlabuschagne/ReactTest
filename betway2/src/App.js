import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import './App.css';

import MyVerticallyCenteredModal from './components/Modal/Modal';

function App() {

  const [modalShow, setModalShow] = React.useState(false);

  return (

/* d-flex class is used to create a flexible container that can dynamically adjust the layout of its child elements based on the available space */
<wrapper class="d-flex flex-column">

  <div class="d-flex justify-content-start">
    <div class="p-2"><img src="https://betway.com/doc-centre/assets/betway-logo-white-sml.png" class="rounded" alt="Betway Image"/></div>
  </div>

  <div class="d-flex justify-content-end">
      <div class="p-2">
      <Button variant="success" onClick={() => setModalShow(true)}>
        Login
      </Button>
      </div>

      <div class="p-2"><button type="button" class="btn btn-light">Sign up</button></div>
  </div>

  <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>


  <ul class="nav nav-tabs justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="#">sports</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">live & real</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">casino</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">esports</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">vegas</a>
    </li>
  </ul>

  <wrapper2>

    <main class="container-fluid py-3 flex-fill">  const [modalShow, setModalShow] = React.useState(false);
    </main>

    <footer id="footer" class="d-flex flex-column">
      <div class="FooterItem1">SPORTS NEW CUSTOMER OFFER</div>
      <div class="FooterItem2"><div class="FooterItem2Content" >Get up to $10 in Free Bets</div></div>
      <div class="FooterItem3"><button type="button" class="FooterItem3Button btn btn-success">Join Now</button></div>
    </footer>

  </wrapper2>

</wrapper>

  );
}

export default App;
