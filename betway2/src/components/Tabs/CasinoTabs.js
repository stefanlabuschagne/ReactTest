import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs() {

  const [key, setKey] = useState('home');

  return (

    <Tabs
      className='customTabsFormatting'
      fill
      defaultActiveKey ="1"
      mountOnEnter = 'true'
      activeKey={key}
      onSelect={(k) => 
        {
        setKey(k) ;
        console.log("Hello " +k);

        console.log(setKey +k);        

        // Now change the colors for the entire website here
        var baseColor="";
        var element;

        switch(k){  
  
          case "1":  
              baseColor = 'green';
              element = document.getElementsByClassName("customTab1");
              break;  //optional  

          case "2":  
              baseColor = 'red'; 
              element = document.getElementsByClassName("customTab2");
              break;  //optional 
            
          case "3":  
              baseColor = 'yellow';  
              element = document.getElementsByClassName("customTab3");
              break;  //optional    

          case "4":  
              baseColor = 'blue';  
              element = document.getElementsByClassName("customTab4"); 
              break;  //optional  

          case "5":  
              baseColor = 'purple';  
              element = document.getElementsByClassName("customTab5");
              break;  //optional    

          default:  
              //when no case is matched, this block will be executed;  
              break;  //optional  
          }  

          console.log(element);

          for (const c of element) {
            console.log(c.style.borderBottomColor);

            c.style.borderBottomColor = baseColor;

          }

          // border-bottom: solid 5px rgb(31, 19, 194)

          document.getElementById("joiningbutton").style.backgroundColor = baseColor;
          document.getElementById("joiningbutton").style.borderColor = baseColor;

          document.getElementById("signupbutton").style.color = baseColor;

          // Colors for login CTA
          document.getElementById("loginbutton").style.backgroundColor = baseColor;
          document.getElementById("loginbutton").style.borderColor = baseColor;



          // alert(document.getElementById("loginanchorlink"));
          
          //document.getElementById("loginanchorlink").style.color = baseColor;
          
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

export default CasinoTabs;
  
  
