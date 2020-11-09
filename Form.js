  var firebaseConfig = {
    apiKey: "AIzaSyBXAHbi4JEvP6bCu5ARd4UFgzLI74sJyXI",
    authDomain: "thehummingbird-bc910.firebaseapp.com",
    databaseURL: "https://thehummingbird-bc910.firebaseio.com",
    projectId: "thehummingbird-bc910",
    storageBucket: "thehummingbird-bc910.appspot.com",
    messagingSenderId: "117962002409",
    appId: "1:117962002409:web:a21f83e2c3f4ed32bfc578",
    measurementId: "G-5TNMPMPQGW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

 
	
  function signUp(){
  
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = firebase.auth().createUserWithEmailAndPassword(email.value,password.value);
  promise.catch(e => alert(e.message));
  
  alert("Signed Up");
 }
 