// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var userName = document.getElementById("userName");
var question = document.getElementById("question");

window.addQuestion = function () {
  var obj = {
    userName: userName.value,
    question: question.value,
  };

  console.log(obj);

  obj.id = push(ref(db, "questions")).key;

  var reference = ref(db, `questions/${obj.id}`);
  set(reference, obj)
    .then(function () {
      window.location.assign("../../index.html");
    })
    .catch(function (err) {
      alert(err.message);
    });
};
