var firebaseConfig = {
    apiKey: "AIzaSyAoOhFeR_hWkM1C8NF5NQYWI9-Vol7gpR4",
    authDomain: "kwitter-984e1.firebaseapp.com",
    databaseURL: "https://kwitter-984e1-default-rtdb.firebaseio.com",
    projectId: "kwitter-984e1",
    storageBucket: "kwitter-984e1.appspot.com",
    messagingSenderId: "446908555929",
    appId: "1:446908555929:web:6708cc5122a1a198bc8e08",
    measurementId: "G-30JCR6HNL6"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter_room.html");
    }

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
});  
}
