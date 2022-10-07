function NavBar(){

  const [loggedIn, setLoggedIn] = React.useState(false);

  const firebaseConfig = { 
    apiKey: "AIzaSyCYrSZT0t-9_JSqGFRTmE7kh2fcHQTkwrg",
    authDomain: "bad-bank-forrest.firebaseapp.com",
    projectId: "bad-bank-forrest",
    storageBucket: "bad-bank-forrest.appspot.com",
    messagingSenderId: "422911146503",
    appId: "1:422911146503:web:eba074b2d6795353e948a2",
    measurementId: "G-BBX5P65GC8"
  };

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log('Someones logged in');
        setLoggedIn(true);
    } else {
        console.log('Someones logged out');
        setLoggedIn(false);
    }
})

function logOut() {
    console.log('I logged out');
    auth.signOut();
}
  
  return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>
          {
            loggedIn &&           
            <li className="nav-item">
              <button
                onClick={logOut}
              >
                Log Out
              </button>
            </li>
          }
          
        </ul>
      </div>
    </nav>

  );
}