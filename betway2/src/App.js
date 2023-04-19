import { React } from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import LoginUserButton from './components/LoginUser/LoginUser';
import SignupUserButton from './components/SignupUser/SignupUser';

import CasinoTabs2 from './components/Tabs2/CasinoTabs';
import CasinoFooter from './components/Footer/CasinoFooter';

function App() {

  useEffect(() => {

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
        setLoginText(data.login);
        setsignupText(data.signUp);
        setfooterLines(data.footerLines);
      })
      .catch((err) => {
          console.log(err.message);
          // alert(err.message);
      });

      // Set the Text Values

  },[] );

  const [bannerOptions, setBannerOptions] = useState([]);
  const [loginText, setLoginText] = useState('');
  const [signupText, setsignupText] = useState('');
  const [footerLines, setfooterLines] = useState([]);

  // console.log (footerLines[0]);


  // STATE FOR THE CURRENT COLOR
  // Current color is set to other components as Props
  // Only the Tabstrip can Change the State
  const [baseColor, setSelectedColor] = useState('green');

  function setColor(selectedColor)
  {
    setSelectedColor(selectedColor);

    // Main Screen UI Color Updates
    document.getElementById("joiningbutton").style.backgroundColor = selectedColor;
    document.getElementById("joiningbutton").style.borderColor = selectedColor;
    document.getElementById("signupbutton").style.color = selectedColor;
    document.getElementById("loginbutton").style.backgroundColor = selectedColor;
    document.getElementById("loginbutton").style.borderColor = selectedColor;
    
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
              <LoginUserButton baseColor={baseColor} buttonText={loginText} />
            </div>

            <div class="p-2">
              <SignupUserButton baseColor={baseColor} buttonText={signupText} />
            </div>

        </span>

    </div>

  </div>

  <wrapper2>

    <CasinoTabs2 
                 onData={setColor}
                 baseColor={"Green"} 
                 TabOptions={bannerOptions}
                />

      <CasinoFooter FooterText={footerLines} />

  </wrapper2>

</wrapper>

  );
  
}

export default App;
