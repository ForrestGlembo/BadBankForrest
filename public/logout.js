// function LogOut() {

//     const firebaseConfig = {
   
//         apiKey: "AIzaSyCYrSZT0t-9_JSqGFRTmE7kh2fcHQTkwrg",
        
//         authDomain: "bad-bank-forrest.firebaseapp.com",
      
//         projectId: "bad-bank-forrest",
      
//         storageBucket: "bad-bank-forrest.appspot.com",
      
//         messagingSenderId: "422911146503",
      
//         appId: "1:422911146503:web:eba074b2d6795353e948a2",
      
//         measurementId: "G-BBX5P65GC8"
    
//       };

//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }
    
//     const auth = firebase.auth();

//     auth.onAuthStateChanged(firebaseUser => {
//         if (firebaseUser) {
//             console.log('Someones logged in');
//         } else {
//             console.log('Someones logged out');
//         }
//     })

//     function logOut() {
//         console.log('I logged out');

//         auth.signOut();
//     }

//     return (
//         <>
//             <h5>Here is where we will logout</h5>
//             <p onClick={logOut}>Click Here to Logout</p>
//         </>
//     )
// }