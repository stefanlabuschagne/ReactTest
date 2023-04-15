import logo from './logo.svg';
import './App.css';

function App() {
  return (

/* d-flex class is used to create a flexible container that can dynamically adjust the layout of its child elements based on the available space */
<wrapper class="d-flex flex-column">

  <div class="d-flex justify-content-start">
    <div class="p-2"><img src="https://betway.com/doc-centre/assets/betway-logo-white-sml.png" class="rounded" alt="Betway Image"/></div>
  </div>

  <div class="d-flex justify-content-end">
      <div class="p-2"><button type="button" class="btn btn-success">Login</button></div>
      <div class="p-2"><button type="button" class="btn btn-light">Sign up</button></div>
  </div>


  <ul class="nav nav-tabs nav-fill">
    <li class="nav-item">
      <a class="nav-link" href="#">sports</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">live & real</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">casino</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">esports</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">vegas</a>
    </li>
  </ul>

  <wrapper2>

    <main class="container-fluid py-3 flex-fill">

    </main>


    <footer id="footer" class="d-flex flex-column">
      <div class="FooterItem1">SPORTS NEW CUSTOMER OFFER</div>
      <div class="FooterItem2"><div class="FooterItem2Content" >Get up to $10 in Free Bets</div></div>
      <div class="FooterItem3"><button type="button" class="FooterItem3Button btn btn-success">Join Now</button></div>
    </footer>

  </wrapper2>


</wrapper>

  );
}

export default App;
