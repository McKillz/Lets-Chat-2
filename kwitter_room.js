
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAzh8pCoN9SvZABeW-4erTjYISpMr_VzqE",
      authDomain: "kwitter-new-1ba01.firebaseapp.com",
      databaseURL: "https://kwitter-new-1ba01-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-1ba01",
      storageBucket: "kwitter-new-1ba01.appspot.com",
      messagingSenderId: "282122326001",
      appId: "1:282122326001:web:b840d0f763b02a37c63e50"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Hello " + user_name + ", welcome to Lets Chat. You can either join or create a new room. Have fun!" ;

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
 
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}