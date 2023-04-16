import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs() {

  function weSelectedATab()
  {
  }

  const [key, setKey] = useState('home');


  return (

    <Tabs

      fill

      
    >
      <Tab eventKey="sports" title="sports"  tabClassName="customTabFormatting">
       
      </Tab>
      <Tab eventKey="l-r" title="live & real" tabClassName="customTabFormatting">
        
      </Tab>
      <Tab eventKey="casino" title="casino" tabClassName="customTabFormatting">
        
      </Tab>
      <Tab eventKey="esports" title="esports" tabClassName="customTabFormatting">
        
      </Tab>
      <Tab eventKey="vegas" title="vegas" tabClassName="customTabFormatting">
        
      </Tab>
    </Tabs>

    
/*
    <div class=""> 

    <button id="mybuttton" >click me</button>

    </div>
*/


  );
}

export default CasinoTabs;
  
  
