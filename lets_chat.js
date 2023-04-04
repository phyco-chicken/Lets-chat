//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyB786x0_igGSD22b5MYv_iWAhS0pQiTvQo",
    authDomain: "kwitter-724e2.firebaseapp.com",
    projectId: "kwitter-724e2",
    storageBucket: "kwitter-724e2.appspot.com",
    messagingSenderId: "514964189315",
    appId: "1:514964189315:web:c1cb1515cde4d81a912bb6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
