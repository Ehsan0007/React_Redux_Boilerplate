import firebase from 'firebase';

 var config = {
    apiKey: "AIzaSyCMlqXeNC9neoYJmVtnnHyns8e7KrXXEx4",
    authDomain: "login-9e34a.firebaseapp.com",
    databaseURL: "https://login-9e34a.firebaseio.com",
    storageBucket: "login-9e34a.appspot.com",
    messagingSenderId: "47637167713"
  };
  firebase.initializeApp(config);
const database = firebase.database();

export default database;

