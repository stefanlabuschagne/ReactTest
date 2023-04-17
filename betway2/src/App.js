import React from 'react';
import './App.css';
import LoginUserButton from './components/LoginUser/LoginUser';
import SignupUserButton from './components/SignupUser/SignupUser';
import CasinoTabs from './components/Tabs/CasinoTabs';

function App() {

  // Create a Global Color Variable

  // Query the API for TEXT to be displayed on the Components






  return (

<wrapper class="d-flex flex-column">

<div class="topcontainer">

  <div class="d-flex">

      <span class="justify-content-start spanspacing">  
        <div class="p-2"><img src="https://cdn.betway.co.za/images/Shared/sprite/site/Betway_White.png" height={38} class="rounded" alt="Betway"/></div>
      </span>

      <span class="d-flex justify-content-end spanspacing">

          <div class="p-2">
            <LoginUserButton displayColor="Brown" displayText="" />
          </div>

          <div class="p-2">
            <SignupUserButton displayColor="Brown" displayText=""/>
          </div>

      </span>

  </div>

</div>

  <wrapper2>

    <CasinoTabs />

    <footer id="footer" class="d-flex flex-column">
      <div class="FooterItem1">SPORTS NEW CUSTOMER OFFER</div>
      <div class="FooterItem2"><div class="FooterItem2Content" >Get up to $10 in Free Bets</div></div>
      <div class="FooterItem3"><button type="button" id="joiningbutton" class="FooterItem3Button btn btn-success">Join Now</button></div>
    </footer>

  </wrapper2>

</wrapper>

  );
}

export default App;
