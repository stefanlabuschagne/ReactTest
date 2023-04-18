import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs2    ({baseColor, onData }) {

  const [key, setKey] = useState('1');
  
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

                // Propagate color to the caller
                onData(baseColor);

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
  
  
