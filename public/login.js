function Login(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [success, setSuccess] = React.useState(true);    

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus} setSuccess={setSuccess}/> :
        <LoginMsg setShow={setShow} success={success}/>}
    />
  ) 
}

function LoginMsg(props){
  return(<>
    {
      props.success 
        ?
        <h5>Success</h5>
        :
        <h5>Login Failure</h5>
    }
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');




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

  function handle() {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);

    console.log('two')            
    props.setStatus('');
    props.setShow(false);

    promise.catch(e => {
      props.setSuccess(false);
      props.setStatus('Login Failure!')
    });
  }








  // function handle(){
  //   fetch(`/account/login/${email}/${password}`)
  //   .then(response => response.text())
  //   .then(text => {
  //       try {
  //           const data = JSON.parse(text);
  //           props.setStatus('');
  //           props.setShow(false);
  //           console.log('JSON:', data);
  //       } catch(err) {
  //           props.setStatus(text)
  //           console.log('err:', text);
  //       }
  //   });
  // }


  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
   
  </>);
}


