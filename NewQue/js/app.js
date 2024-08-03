// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
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

var questionParent = document.getElementById("questionParent");
var questions = [];

function renderQuestions() {
  questionParent.innerHTML = ``;
  for (var i = 0; i < questions.length; i++) {
    var obj = questions[i];
    questionParent.innerHTML += `<div onclick="cardClick('${obj.id}')" class="cursorCard rounded shadow border border2 border-dark p-3 mb-2">
    <div>
    <p class="text-info fs-5"><i class="fa-solid fa-user"></i> ${obj.userName}</p>
    </div>
                        <p class="fs-5 m-0 p-0">${obj.question}</p>
                        <div class="py-2">
                            <p class="m-0 p-0">Total Answers : 786</p>
                        </div>
                    </div>`;
  }
}

function getData() {
  var reference = ref(db, "questions");
  onValue(reference, function (dt) {
    questions = Object.values(dt.val());
    renderQuestions();
  });
}
getData();

window.cardClick = function (id) {
  localStorage.setItem("queId", id);
  window.location.assign("../pages/question/question.html");
};
