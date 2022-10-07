function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');


  

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
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
    
    }
    

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }






  function handle(){
    console.log(name,email,password);
    const url = `http://localhost:3000/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
       

        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => {
            console.log(e);
           props.setStatus('Create Failure!')
       
         })

    })();


  // function handle(){
  //   fetch(`/account/create/${name}/${email}/${password}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       const auth = firebase.auth();
  //       const promise = auth.createUserWithEmailAndPassword(email, password);

  //       promise.catch(({message}) => console.log(message))
  //     });



    
    props.setShow(false);
  }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
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

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>

  </>);
}