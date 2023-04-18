import { React } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import LoginUserButton from './components/LoginUser/LoginUser';
import SignupUserButton from './components/SignupUser/SignupUser';

import CasinoTabs2 from './components/Tabs2/CasinoTabs';

function App() {

  useEffect(() => {

    // TODO
    // Code to load the Display-Text for the App from the API
    // This needs CORS to be configured!
    // https://bbackendapi.azurewebsites.net/api/betway/settings/ctalogin
    // https://bbackendapi.azurewebsites.net/api/betway/settings/ctalogin

    fetch('https://bbackendapi.azurewebsites.net/api/betway/settings/App', 
    {
        method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
      .then((res) => res.json())
      .then((data) => {
        setBannerOptions(data.bannerOptions);
        setLoginText(data.loginText);
        setSignUp(data.signUp);
        setfooterLines(data.footerLines);
      })
      .catch((err) => {
          console.log(err.message);
          // alert(err.message);
      });

      // Set the Text Values

  });

  const [bannerOptions, setBannerOptions] = useState([]);
  const [loginText, setLoginText] = useState('');
  const [signUp, setSignUp] = useState('');
  const [footerLines, setfooterLines] = useState([]);


  // STATE FOR THE CURRENT COLOR
  // Current color is set to other components as Props
  // Only the Tabstrip can Change the State
  const [baseColor, setSelectedColor] = useState('green');

  function setColor(colorFromChild)
  {
    setSelectedColor(colorFromChild);
    alert(colorFromChild);
  }

  return (

<wrapper class="d-flex flex-column">

<div class="topcontainer">

  <div class="d-flex">

      <span class="justify-content-start spanspacing">  
        <div class="p-2"><img src="https://cdn.betway.co.za/images/Shared/sprite/site/Betway_White.png" height={38} class="rounded" alt="Betway"/></div>
      </span>

      <span class="d-flex justify-content-end spanspacing">

          <div class="p-2">
            <LoginUserButton displayColor={baseColor} displayText="" />
          </div>

          <div class="p-2">
            <SignupUserButton displayColor={baseColor} displayText=""/>
          </div>

      </span>

  </div>

</div>

  <wrapper2>

    <CasinoTabs2 
                 onData={setColor}
                 baseColor={"Green"} 
                  />

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
