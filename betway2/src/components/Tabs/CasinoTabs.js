import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './CasinoTabs.css';

function CasinoTabs() {

  function weSelectedATab()
  {
  }


  return (
    <Tabs
      defaultActiveKey="sports"
      id="casinoTabs"
      className="mb-3"
      fill
    >
      <Tab eventKey="sports" title="sports">
       
      </Tab>
      <Tab eventKey="l-r" title="live & real">
        
      </Tab>
      <Tab eventKey="casino" title="casino">
        
      </Tab>
      <Tab eventKey="esports" title="esports">
        
      </Tab>
      <Tab eventKey="vegas" title="vegas">
        
      </Tab>
    </Tabs>
  );
}

export default CasinoTabs;
  
  
