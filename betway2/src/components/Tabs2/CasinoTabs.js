import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs2    ({baseColor, onData,TabOptions }) {

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
                    break;    
      
                case "2":  
                    baseColor = 'red'; 
                    break;   
                  
                case "3":  
                    baseColor = 'cyan';  
                    break;      
      
                case "4":  
                    baseColor = 'blue';  
                    break;    
      
                case "5":  
                    baseColor = 'purple';  
                    break;      
      
                default:  
                    //when no case is matched, this block will be executed;  
                    break;    
                } 

                // Propagate color to the caller
                onData(baseColor);

         } }
      
    >
      <Tab eventKey={1} id="T1" title={TabOptions[0]} tabClassName="customTabFormatting customTab1"></Tab>
      <Tab eventKey={2} id="T2" title={TabOptions[1]} tabClassName="customTabFormatting customTab2"></Tab>
      <Tab eventKey={3} id="T3" title={TabOptions[2]} tabClassName="customTabFormatting customTab3"></Tab>
      <Tab eventKey={4} id="T4" title={TabOptions[3]} tabClassName="customTabFormatting customTab4" ></Tab>
      <Tab eventKey={5} id="T5" title={TabOptions[4]} tabClassName="customTabFormatting customTab5"></Tab>
    </Tabs>

  );
}

export default CasinoTabs2;
  
  
