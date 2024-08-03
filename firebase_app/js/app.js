// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import {
  set,
  push,
  ref,
  getDatabase,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC43HkkHXb4kEywSi63u_7SGV_rpkaz8iA",
  authDomain: "carshowroom-738e7.firebaseapp.com",
  databaseURL: "https://carshowroom-738e7-default-rtdb.firebaseio.com",
  projectId: "carshowroom-738e7",
  storageBucket: "carshowroom-738e7.appspot.com",
  messagingSenderId: "587225972841",
  appId: "1:587225972841:web:6b81efbf643dfb2311a2f8",
  measurementId: "G-SSK8KDD8SP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var inp = document.getElementById("inp");
var parent = document.getElementById("parent");

var allTask;

window.addData = function () {
  var obj = {
    text: inp.value,
  };

  obj.id = push(ref(db, "task")).key;
  console.log(obj);

  var reference = ref(db, `tasks/${obj.id}`);
  set(reference, obj);
};

window.removeList = function (id) {
  var reference = ref(db, `tasks/${id}`);
  remove(reference);
};

function getData() {
  const reference = ref(db, "tasks/");
  onValue(reference, function (taskData) {
    allTask = taskData.val();
    console.log(allTask, "Task Data");
    var arr = Object.values(allTask);
    console.log(arr, "Task Data");
    parent.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
      parent.innerHTML += `<p>${arr[i].text} <button onclick="removeList('${arr[i].id}')">Remove</button></p>`;
    }
  });
}
getData();

// var database = {
//   notes: {
//     asudakusdiouasjdas: {
//       text: "ABC Test",
//     },
//     aslkjdasdalksdjlak: {
//       text: "ABC Test",
//     },
//     ausduaoieo45uyo345: {
//       text: "ABC Test",
//     },
//   },
// };

var obj = {
  id: 1,
  name: "abc",
};
var arr = Object.values(obj);
