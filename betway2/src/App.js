import React from 'react';
import './App.css';
import LoginUserButton from './components/LoginUser/LoginUser';
import SignupUserButton from './components/SignupUser/SignupUser';
import CasinoTabs from './components/Tabs/CasinoTabs';

function App() {

  return (

/* d-flex class is used to create a flexible container that can dynamically adjust the layout of its child elements based on the available space */
<wrapper class="d-flex flex-column">

<div class="topcontainer">

    <div class="d-flex justify-content-start">
      <div class="p-2"><img src="https://cdn.betway.co.za/images/Shared/sprite/site/Betway_White.png" height={38} class="rounded" alt="Betway Image"/></div>
    </div>

    <div class="d-flex justify-content-end">

        <div class="p-2">
          <LoginUserButton />
        </div>

        <div class="p-2">
          <SignupUserButton />
        </div>

    </div>

  </div>

  <wrapper2>

    <CasinoTabs />

    <main class="container-fluid py-3 flex-fill">  
    
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
