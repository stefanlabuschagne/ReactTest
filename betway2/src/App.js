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


<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Disabled</a>
  </li>
</ul>

      <main class="container-fluid py-3 flex-fill">
          <h2>Content</h2>
          <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuas dflkajsdfklasjdfsafasdf sadf
          sadfdasdfasdf
          LAST LINE  </p>
      </main>


      <footer class="container-fluid w-100 bg-dark text-light py-3">
        <div id="footer">
            <div class="tableft">
                <p>PART OF US.JOBS UNIVERSE</p>
                <p> The Porrent company of jobs and find jobs. </p>
                <p>© 2018 Copyright <a href="/accounts/signup/">US.Jobs</a> . All rights reserver</p>
            </div>
            <div class="tabcenter">
                <p>SOCIAL MEDIA</p>
                <p>
                    <table>
                        <tr>
                            ..
                        </tr>
                    </table>
                </p>
            </div>
            <div class="tabrigth">
                <p>LINK</p>
                <p>About <br/>Post a Job<br/>FAQ<br/></p>
            </div>
        </div>
      </footer>

  </wrapper>

  );
}

export default App;
