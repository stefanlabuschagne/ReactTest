import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs2    ({baseColor, onTab1Click, onTab2Click, onTab3Click, onTab4Click, onTab5Click }) {

  const [key, setKey] = useState('home');
  
  // Lift to the Top
  // const [currentColor, setCurrentColor] = useState('green');

  return (

    <Tabs
      className='customTabsFormatting'
      fill
      defaultActiveKey ="1"
      mountOnEnter = 'true'
      activeKey={key}
      onSelect={(k) => 
        {
            switch(k){  
  
                case "1":  
                    baseColor = 'green';
                    onTab1Click();
                    break;  //optional  
      
                case "2":  
                    baseColor = 'red'; 
                    onTab2Click();
                    break;  //optional 
                  
                case "3":  
                    baseColor = 'yellow';  
                    onTab3Click();
                    break;  //optional    
      
                case "4":  
                    baseColor = 'blue';  
                    onTab4Click();
                    break;  //optional  
      
                case "5":  
                    baseColor = 'purple';  
                    onTab5Click();
                    break;  //optional    
      
                default:  
                    //when no case is matched, this block will be executed;  
                    break;  //optional  
                } 

                // Below needs to be replaced by sending a color to each component

                document.getElementById("joiningbutton").style.backgroundColor = baseColor;
                document.getElementById("joiningbutton").style.borderColor = baseColor;
      
                document.getElementById("signupbutton").style.color = baseColor;
      
                // Colors for login CTA
                document.getElementById("loginbutton").style.backgroundColor = baseColor;
                document.getElementById("loginbutton").style.borderColor = baseColor;
      
                // alert(document.getElementById("loginanchorlink"));
                
                // document.getElementById("loginanchorlink").style.color = baseColor;
                
                //document.getElementById("loginsubmitbutton").style.backgroundColor = baseColor;
                //document.getElementById("loginsubmitbutton").style.borderColor = baseColor;
      
                //document.getElementById("loginanchorforgot").style.color = baseColor;

         } }
      
    >
      <Tab eventKey={1} id="T1" title="sports" tabClassName="customTabFormatting customTab1" >
       
      </Tab>
      <Tab eventKey={2} id="T2" title="live & real" tabClassName="customTabFormatting customTab2"    >
        
      </Tab>
      <Tab eventKey={3} id="T3" title="casino" tabClassName="customTabFormatting customTab3">
        
      </Tab>
      <Tab eventKey={4} id="T4" title="esports" tabClassName="customTabFormatting customTab4" >
        
      </Tab>
      <Tab eventKey={5} id="T5" title="vegas" tabClassName="customTabFormatting customTab5">
        
      </Tab>
    </Tabs>


  );
}

export default CasinoTabs2;
  
  
