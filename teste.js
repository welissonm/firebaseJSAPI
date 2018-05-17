const firebaseConfig = {
  apiKey: "AIzaSyByiB0AAg-3VjjAiyrKerc2mcG8PpYwSXE",
  authDomain: "houselink-f62c5.firebaseapp.com",
  databaseURL: "https://houselink-f62c5.firebaseio.com",
  projectId: "houselink-f62c5",
  storageBucket: "houselink-f62c5.firebaseapp.com",
  messagingSenderId: "757449794990"
}
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
// console.log(db);
var usersRef = firebase.database().ref('users/');
usersRef.on('child_added', (snapshot) => {
  console.log(snapshot.key);
});
function writeUserData(name, _email, _nickname) {
  usersRef.push({
    username: name,
    email: _email,
    nickname : _nickname
  });
  
}

writeUserData('welisson', 'welisson.musico@hotmail.com','welissonm');
