import React, { useState } from 'react';
import './CasinoFooter.css';

function CasinoFooter({FooterText}) {

  return (

    <footer id="footer" class="d-flex flex-column">
      <div class="FooterItem1">{FooterText[0]}</div>
      <div class="FooterItem2"><div class="FooterItem2Content" >{FooterText[1]}</div></div>
      <div class="FooterItem3"><button  
                                  type="button" 
                                  id="joiningbutton" 
                                  class="FooterItem3Button btn btn-success">{FooterText[2]}
                                </button>
        </div>
    </footer>

  );
}

export default CasinoFooter;
