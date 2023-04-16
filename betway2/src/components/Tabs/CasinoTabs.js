import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs() {

  const [key, setKey] = useState('home');

  return (

    <Tabs

      fill

      activeKey={key}
      onSelect={(k) => 
        {
        setKey(k) ;
        console.log("Hello " +k);

        console.log(setKey +k);        

        // Now change the colors for the entire website here
        var baseColor="";

        switch(k){  
  
          case "1":  
              baseColor = 'green';
              break;  //optional  

          case "2":  
              baseColor = 'red';  
              break;  //optional 
            
          case "3":  
              baseColor = 'yellow';  
              break;  //optional    

          case "4":  
              baseColor = 'blue';  
              break;  //optional  

          case "5":  
              baseColor = 'purple';  
              break;  //optional    

          default:  
              //when no case is matched, this block will be executed;  
              break;  //optional  
          }  


          // this.Tab.style.backgroundColor = baseColor;

          const elements = document.querySelectorAll('.nav-link.active');


          console.log(elements);

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
      <Tab eventKey="1" id="sss" title="sports" tabClassName="customTabFormatting" >
       
      </Tab>
      <Tab eventKey="2" title="live & real" tabClassName="customTabFormatting">
        
      </Tab>
      <Tab eventKey="3" title="casino" tabClassName="customTabFormatting">
        
      </Tab>
      <Tab eventKey="4" title="esports" tabClassName="customTabFormatting">
        
      </Tab>
      <Tab eventKey="5" title="vegas" tabClassName="customTabFormatting">
        
      </Tab>
    </Tabs>


  );
}

export default CasinoTabs;
  
  
