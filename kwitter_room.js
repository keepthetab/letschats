
var firebaseConfig = {
    apiKey: "AIzaSyCoSrgV83PuebqAPWeGd-1veMrgiTsPrRg",
    authDomain: "kwitter-e276f.firebaseapp.com",
    databaseURL: "https://kwitter-e276f-default-rtdb.firebaseio.com",
    projectId: "kwitter-e276f",
    storageBucket: "kwitter-e276f.appspot.com",
    messagingSenderId: "782474844890",
    appId: "1:782474844890:web:7de29cd2d8e87550a5e3e3"
  };
  
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName (this.id) ' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("?").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html"

  }

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();
