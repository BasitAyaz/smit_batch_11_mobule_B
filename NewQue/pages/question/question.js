// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
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

var id = localStorage.getItem("queId");
var questionObj = {};

var question = document.getElementById("question");
var userName = document.getElementById("userName");

function getData() {
  var reference = ref(db, `questions/${id}`);
  onValue(reference, function (dt) {
    questionObj = dt.val();
    console.log(questionObj);
    question.innerHTML = questionObj.question;
    userName.innerHTML = questionObj.userName;
  });
}
getData();

var userNameInp = document.getElementById("userNameInp");
var answerInp = document.getElementById("answerInp");

window.addAnswer = function () {
  var obj = {
    userName: userNameInp.value,
    answer: answerInp.value,
  };
  if (questionObj.answers && questionObj.answers.length > 0) {
    questionObj.answers.push(obj);
  } else {
    questionObj.answers = [obj];
  }

  var reference = ref(db, `questions/${questionObj.id}`);
  set(reference, questionObj);
};
