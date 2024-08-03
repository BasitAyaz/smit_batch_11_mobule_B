// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATfBNST0abnXcBJyEuO1R79FnmjqZ8vQI",
  authDomain: "secondtest-b4d30.firebaseapp.com",
  databaseURL: "https://secondtest-b4d30-default-rtdb.firebaseio.com",
  projectId: "secondtest-b4d30",
  storageBucket: "secondtest-b4d30.appspot.com",
  messagingSenderId: "964241735138",
  appId: "1:964241735138:web:320c57d90506a3dbf34dbb",
  measurementId: "G-FT6BWLPVE5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");

window.signupUser = function () {
  var obj = {
    userName: userName.value,
    email: email.value,
    password: password.value,
  };

  console.log(obj);

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (res) {
      console.log(res);
      obj.id = res.user.uid;
      var reference = ref(db, `users/${obj.id}`);
      set(reference, obj)
        .then(function (dbRes) {
          console.log(dbRes);
        })
        .catch(function (dbErr) {
          console.log(dbErr);
        });
    })
    .catch(function (err) {
      alert(err.message);
    });
};
