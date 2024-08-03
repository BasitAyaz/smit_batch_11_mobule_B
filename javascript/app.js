// alert("ABC")

// var a = "ABC"

// console.log(a)

// var b = 20
// console.log(b)
// b = 30
// console.log(b)

// var a = 10
// var b = 40 - a

// console.log(b)

// var a = 90-30
// console.log(a)

// var a = 10 * (5 + 30)
// console.log(a)

// var a = "30"
// var b = 20

// var c = a + b

// console.log(c)

// var a = "Abdul"
// var b = "Basit"

// var c = a+" "+b
// console.log(c)

// var a = 10
// var b = a++

// console.log(b)
// console.log(a)

// var a = +prompt("Enter First Name")
// var b = +prompt("Enter Last Name")
// console.log(a,b)

// var asd = '' //legal
// var 123 = '' //illegal
// var ab12 = '' //legal
// var 12ab = '' //illegal
// var var = '' //illegal
// var ab@s = '' //illegal
// var ab_ = '' //legal

// var a = 10
// var b = 10

// if(a == b){
//     console.log("A is Equal to B you can do Action")
// }else{
//     console.log("A is not Equal to B")
// }

// var marks = 80
// if(marks >= 70){
//     console.log("Mithai")
// }else if(marks >= 50){
//     console.log("Amma ne Bacha lia")
// }else{
//     console.log("Donon se Dhulai")
// }

// var a = "10"

// if(a === 10){
//     console.log('A is Equal')
// }

// var studentCard = true
// var dept = "phy"

// if(studentCard == true){
//     if(dept == "sci"){
//         console.log("Allow")
//     }else{
//         console.log("Not Allow")
//     }
// }else{
//     console.log("Not Allow")
// }

// if(studentCard == true || dept == 'sci'){
//     console.log("Allow")
// }else{
//     console.log("Not Allow")
// }

// var students = [
//   "Zaid",
//   "Haris",
//   "Abu Bakar",
//   "Hamza",
//   "Haris",
//   "Abu Bakar",
//   "Hamza",
// ];
// students[6] = "Muhammad Ahmed"
// students.push('Muhammad Abu Bakar')
// students.pop()
// students.unshift("Abdullah")
// students.shift()
// var b = students.slice(1)
// var b = students.splice(1,2)
// students.splice(1,2)
// console.log(students)

// var i = students.indexOf('Abu Bakar')
// var i = students.lastIndexOf('Bakar')
// console.log(i)

// var a = students.length
// console.log(a)

// var last = students.length
// var std = students[last-1]
// console.log(std)

// var last = students.slice(-1)
// console.log(last)

// var last = students[students.length - 1]
// console.log(last)

// var a = [
//     "Muhammad Abu Bakar",
//     "Muhammad Umar",
//     "Muhammad Usman",
//     "Muhammad Ali",
//     "Muhammad Hamza",
//     "Muhammad Muaviya"
// ]
// var b = "Hamza"

// var found = false

// for(var i = 0; i < a.length; i++){
//     // console.log(a[i])
//     if(a[i] === b){
//         found = true
//     }
// }

// if(found == true){
//     console.log("Found")
// }else{
//     console.log("not Found")
// }

// var a = ["a","b","c","d","e"]
// var b = [1,2,3,4,5]

//Output
// var c = ["1a","1b","1c","1d","1e","2a","2b","2c" ....... "5e"]

// var c = []

// for(var i = 0; i<a.length; i++){
//     for(var j = 0; j<b.length; j++){
//         console.log(a[i] , b[j])
//         c.push(a[i]+b[j])
//     }
// }
// console.log(c)

// var students = ["Zaid", "Haris", "Abu Bakar", "Hamza", "Haris", "Hamza"];

// var a = "AbuBakar";
// var i = students.indexOf(a);
// console.log(i);

// var a = "KARACHI";

// KARACHI
// karachi
// var b = "KARACHI";
// b = b.toUpperCase();

// if (a == b) {
//   console.log("City Matched", b);
// }

// var a = "karachi";

// var firstLetter = a.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = a.slice(1);
// otherLetters = otherLetters.toLowerCase();

// var b = firstLetter + otherLetters;

// console.log(b);

// var a =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi corporis possimus odio impedit ullam expedita alias, sunt voluptatibus. Repellendus consectetur delectus temporibus sed beatae hic. Totam eaque esse eligendi porro! A.";

// word find = consectetur
// replace By = ABCDE

// for (var i = 0; i < a.length; i++) {
//   // finding text
//   var word = a.slice(i, i + 11);
//   console.log(word);
//   if (word == "consectetur") {
//     console.log("Word Found");

//     var starting = a.slice(0, i);
//     var ending = a.slice(i + 11);

//     var b = starting + "ABCDE" + ending;
//     console.log(b);
//     break;
//   }
// }

// var i = a.indexOf("consectetur");
// console.log(i);
// var starting = a.slice(0, i);
// var ending = a.slice(i + 11);

// var b = starting + "ABCDE" + ending;
// console.log(b);

// var b = a.replace(/consectetur/g, "ABCDE");
// console.log(b);

// var a = "*";
// var b = a.repeat(8);

// console.log(b);

// var a = "ABCD,EFGH,IJKL";
// var b = a.split(",");
// var c = b.join("T");

// console.log(b);
// console.log(c);

// var a = 1.5;
// var b = Math.round(a);
// console.log(b);

// var a = Math.ceil(1.9);
// var a = Math.floor(1.7);
// console.log(a);

// var a = Math.random();
// // 0.1111111111111111
// // 0.9999999999999999
// var diceValue = Math.ceil(a * 6);
// console.log(diceValue);

// console.log(typeof NaN);

// if (" ") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// var a = "10.13";

// var b = +a;
// var b = Number(a);
// var b = parseFloat(a);
// var b = parseInt(a);

// console.log(b);

// var a = 10.999999;
// var b = a.toString();
// var b = a.toLocaleString();
// var b = a.toFixed(2);
// var c = a * 313999999999;
// var d = b * 313999999999;
// console.log(c, d);

// var a = 1;

// for (var i = 0; i < 10; i++) {
//   a += a * 3;
// }

// console.log(a);

// 1,5,6,48,3,1,5,6,21,3,52,2,165

// var max = Math.max(1, 5, 6, 48, 3, 1, 5, 6, 21, 3, 52, 2, 165);
// var min = Math.min(1, 5, 6, 48, 3, 1, 5, 6, 21, 3, 52, 2, 165);
// console.log(min);

// var currentDate = new Date("01-20-2020");
// console.log(currentDate);
// console.log("Date =>", currentDate.getDate());
// console.log("Month =>", currentDate.getMonth());
// console.log("Day =>", currentDate.getDay());
// console.log("Year =>", currentDate.getFullYear());
// console.log("Hours =>", currentDate.getHours());
// console.log("Min =>", currentDate.getMinutes());
// console.log("Sec =>", currentDate.getSeconds());
// console.log("Mili =>", currentDate.getMilliseconds());
// console.log("Time =>", currentDate.getTime());

// var a = new Date();

// a.setDate(new Date().getDate() + 5);
// a.setMonth(0);
// a.setFullYear(2000);
// a.setHours(12);
// a.setMinutes(30);
// a.setSeconds(45);
// a.setMilliseconds(500);

// console.log(a);

// var a = 35 % 7;
// console.log(a);

// function abc() {
//   console.log("Testing Function Calling");
// }

// console.log("ABC");

// abc();
// abc();
// abc();

// function printMyMessage(message) {
//   console.log("My Message: " + message);
// }
// printMyMessage("ABC");
// printMyMessage("Abdul Basit");

// function calculateDiscount(amount, dis) {
//   var price = amount;
//   var discount = dis;
//   var total = price - discount;
//   console.log(total);
// }

// calculateDiscount(400, 100);
// calculateDiscount(1000, 200);
// calculateDiscount(17000, 1000);

// Local Variable
// Global Variable
// return

// var a = "abc";

// if (true) {
//   if (true) {
//     console.log(a);
//   }
// }

// function abc() {
//   var a = "abc";
// }
// console.log(a);
// abc();

// if (true) {
//   var a = "ABC";
// }
// console.log(a);
// var c;
// function abc() {
//   var a = 10;
//   var b = 20;

//   c = a + b;
// }
// abc();
// console.log(c);

// var total;
// function calcDiscount(price, discount) {
//   total = price - discount;
//   return total;
// }
// calcDiscount(1000, 100);
// calcDiscount(500, 50);
// console.log(total);

// function abc() {
//   var a = "Abdul Basit Ahmed";

//   return a;
// }

// var val = abc();

// abc();
// function login() {
//   var a = 10;
//   var b = 20;
//   if (a == b) {
//     return false;
//   }
//   //   login Logic
// }

// function calcDiscount(price, discount) {
//   total = price - discount;
//   return total;
// }
// var p1 = calcDiscount(1000, 200);
// var p2 = calcDiscount(500, 50);

// function func1() {
//   console.log("Function 1");
// }
// function func2() {
//   console.log("Function 2");
// }
// function playAll() {
//   func1();
//   func2();
// }
// playAll();

// create a function taking 2 perameters, first perameter for price and second peramter for discount percentage. calculate discount percentage and return the final amount after discount.

// percentageAmount = (price/100)*percentage
// finalAmount = price - percentageAmount

// var amounts = [1, 231, 45, 612, 3, 456, 123, 4, 654, 21];
// calculate the sum of all numbers of this Array

// function abc() {
//   var sum = 0;
//   for (var i = 0; i < amounts.length; i++) {
//     sum += amounts[i];
//   }
//   return sum;
// }

// var a = abc();
// console.log(a);

// var arr = [12, 45, 78, 54, 4, 54, 565, 8, 9, 7, 87, 54];
// if val < 50, so multiply by 2
// if val > 50, so multiply by 3
// calculate the Total Multiplied Amount

var arr1 = ["UIY", "TYU", "QWE", "FGH", "TRT", "MOM"];
// check the string including "T" and push in other array and return that array.

// Write a function which tells letter counts of (word).

// write a function which tells that the word which is passed in the arguement is palindrome or not (same pronounciation from start to end and from end to start), example : Mom, Madam. these are palindrome.

// function checkPalendrome(word) {
//   var a = word.split("").reverse().join("");
//   if (word.toLowerCase() == a.toLowerCase()) {
//     console.log(word, true);
//   } else {
//     console.log(false);
//   }
// }
// checkPalendrome("Mother");
// checkPalendrome("Madam");
// checkPalendrome("Mom");
// checkPalendrome("saas");

// create a function that takes 2 peramters, in first perameter take date and in second peramter take number of days
// the task is showing the date after the counting of second peramter according the date of first peramter.

// function dateValues(dt, num) {
//   var a = new Date(dt);
//   a.setDate(new Date(dt).getDate() + num);
//   console.log(a);
// }

// dateValues("05-18-2024", 45);

// write a function name calculateSquare taking 1 perameter, calculate square root of the number which is given in perameter. and return the value.

// function calculateSquare(num) {
//   return num * num;
// }

// var a = calculateSquare(5);
// var b = calculateSquare(9);
// var c = calculateSquare(13);

// console.log(a, b, c);

// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// function showTime() {
//   var dt = new Date();
//   var arr = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var dayIndex = dt.getDay();
//   console.log("Today is : " + arr[dayIndex]);
// }
// showTime();

// Write a JavaScript program to calculate the days left before Eid-ul-Fitr.

// 10 Apr 2024

// function daysBeforeEid() {
//   var EidDate = new Date("04-10-2024");
//   var currentDate = new Date();

//   var diff = EidDate.getTime() - currentDate.getTime();
//   var conv = diff / (1000 * 60 * 60 * 24);
//   console.log(conv);
// }
// daysBeforeEid();

// switch case

// var day = "mon";

// if(day == 'mon'){
//     // Monday Case
// }else if(day == 'tue'){
//     // Tuesday case
// }

// var day = "mon";
// switch (day) {
//   case "mon":
//   case "other":
//     console.log("Monday Case Match");
//     break;
//   case "tue":
//     console.log("Tuesday Case Match");
//     break;
//   case "wed":
//     console.log("Wednesday Case Match");
//     break;
//   case "thu":
//     console.log("Thursday Case Match");
//     break;
//   case "fri":
//     console.log("Friday Case Match");
//     break;
//   case "sat":
//     console.log("Saturday Case Match");
//     break;
//   case "sun":
//     console.log("Sunday Case Match");
//     break;
//   default:
//     console.log("Default Case");
// }

// 1 = paid
// 2 = unpaid
// 3 = partially paid
// 4 = wave

// var status = 1

// switch(status){

// }

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
//   console.log(i);
// }

// var i = 5;
// do {
//   console.log("loop Works at " + i);
//   i++;
// } while (i < 5);

// function abc(message) {
//   console.log(message);
// }
// function changeImage(image) {
//   var newUrl =
//   "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg";

//   image.src = newUrl;
//   console.log(image.src);
// }

// var url1 = "https://thumbs.dreamstime.com/b/light-bulb-19854566.jpg";
// var url2 =
//   "https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb-500x500.jpg";

// function switchOnOff(image) {
//   console.log(image);
//   if (image.src == url1) {
//     image.src = url2;
//   } else {
//     image.src = url1;
//   }
//   }

// function abc(elem) {
//   console.log("Input Focused");
//   elem.style.backgroundColor = "yellow";
// }
// function xyz(elem) {
//   console.log("Input Blured");
//   elem.style.backgroundColor = "white";
// }

// function disappearElement(elem) {
//   elem.style.display = "none";
// }

// var img1 =
//   "https://media.istockphoto.com/id/481365786/photo/diamond.jpg?s=612x612&w=0&k=20&c=niuZ5_KvgJrK08y-bjpXEsninUBf83ha-44_yrPmqpk=";

// var img2 =
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Empty_set_symbol.svg/1200px-Empty_set_symbol.svg.png";

// var count = 0;

// function flip(elem, diamond) {
//   if (count < 3) {
//     if (diamond == "yes") {
//       elem.src = img1;
//     } else {
//       elem.src = img2;
//     }
//     count++;
//   } else {
//     alert("3 Attempt has been completed");
//   }
// }

// var messageBox = document.getElementById("messageBox");

// function cls() {
//   console.log(messageBox);
//   messageBox.style.display = "none";
// }

// var inp = document.getElementById("inp");
// var displayInp = document.getElementById("displayInp");

// function addInp() {
//   console.log(inp.value);
//   displayInp.value = inp.value;
// }

// var inp = document.getElementById("inp");
// var showMessage = document.getElementById("showMessage");

// function addInp() {
//   if (inp.value.length !== 5) {
//     showMessage.innerHTML = "Input Value must be 5 Character";
//   } else {
//     console.log(inp.value);
//   }
// }
// var box = document.getElementById("box");

// function changeClass() {
//   box.className += " square";
// }

// create a div.
// create 3 buttons square,circle,rectangle.
// create css for square, circle, rectangle classes.

// when click on square button div shape should be square and as respect to other buttons.

// var box = document.getElementById("box");
// function shape(cls) {
//   box.className = cls;
// }

// var main = document.getElementById("main");
// var arr = main.getElementsByTagName("P");
// console.log(arr);

// var center = document.getElementById("center");
// var parent = document.getElementById("parent");

// console.log(center.previousSibling);

// var pera = document.getElementById("pera");
// console.log(pera.childNodes[0]);
// pera.childNodes[0].nodeValue = "AHJSA";

// var parent = document.getElementById("parent");
// var arr = parent.childNodes;

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i].nodeType == 1) {
//     console.log(arr[i].nodeName);
//     arr[i].style.color = "red";
//   }
// }

// var parent = document.getElementById("parent");
// var inp = document.getElementById("inp");

// function deleteAll() {
//   parent.innerHTML = "";
// }
// function delList(btn) {
//   btn.parentNode.remove();
// }
// function editList(btn) {
//   console.log(btn.parentNode.childNodes[0]);
//   btn.parentNode.childNodes[0].nodeValue = prompt();
// }

// function addElement() {
//   var pera = document.createElement("P");
//   var text = document.createTextNode(inp.value);
//   pera.appendChild(text);

//   var editBtn = document.createElement("BUTTON");
//   var editText = document.createTextNode("Edit");
//   editBtn.appendChild(editText);
//   editBtn.setAttribute("onclick", "editList(this)");

//   var deleteBtn = document.createElement("BUTTON");
//   var deletText = document.createTextNode("Delete");
//   deleteBtn.setAttribute("onclick", "delList(this)");
//   deleteBtn.appendChild(deletText);

//   pera.appendChild(editBtn);
//   pera.appendChild(deleteBtn);

//   parent.appendChild(pera);
//   inp.value = "";
// }

// var student1 = {
//   rollNo: "AB-123",
//   cnicNo: "452132781",
//   name: "Abdul Basit",
//   contact: "464123",
// };

// student1.name = "Abu Hurera";
// student1.contact = "";
// delete student1.contact;
// var a = "inst" in student1;
// student1.age = 18;

// console.log(student1);

// var obj = {
//   name: "abc",
//   age: 18,
//   isActive: true,
//   hobbies: ["abc", "TYu", "ree"],
//   address: {
//     houseNo: "TY-55",
//     city: "Karachi",
//     country: "Pakistan",
//   },
//   calculation: function (a, b) {
//     return a + b;
//   },
// };

// var a = obj.calculation(400, 600);
// var a = obj.calculation(5646, 65413);

// console.log(obj);

// var students = [
//   {
//     rollNo: "AB-001",
//     result: 70,
//   },
//   {
//     rollNo: "AB-002",
//     result: 80,
//   },
//   {
//     rollNo: "AB-003",
//     result: 85,
//   },
//   {
//     rollNo: "AB-004",
//     result: 69,
//   },
//   {
//     rollNo: "AB-005",
//     result: 56,
//   },
//   {
//     rollNo: "AB-006",
//     result: 71,
//   },
//   {
//     rollNo: "AB-007",
//     result: 40,
//   },
//   {
//     rollNo: "AB-008",
//     result: 35,
//   },
//   {
//     rollNo: "AB-009",
//     result: 89,
//   },
//   {
//     rollNo: "AB-010",
//     result: 52,
//   },
// ];

// var inp = document.getElementById("inp");

// function searchResult() {
//   for (var i = 0; i < students.length; i++) {
//     var std = students[i];
//     if (std.rollNo == inp.value) {
//       console.log(std);
//     }
//   }
// }

// function createObj(name, age, contact) {
//   return {
//     name,
//     age,
//     contact,
//   };
// }

// var obj = createObj("Basit Ahmed", 19, "12236454");
// console.log(obj);

// function CreateStudent(name, rollNumber, contact) {
//   this.name = name;
//   this.rollNumber = rollNumber;
//   this.contact = contact;
// }
// CreateStudent.prototype.inst = "SMIT";

// var obj = new CreateStudent("Basit Ahmed", "AB-001", "1234564");
// console.log(obj.inst);

// var obj = {
//   id: 1,
//   name: "ABC",
//   age: 18,
// };

// var keys = Object.keys(obj);
// console.log(keys);

// var values = Object.values(obj);
// console.log(values);

// var entries = Object.entries(obj);
// console.log(entries);

// var a = ["A", "C", "B", [1, 2, 3, ["a", "b", "c", [111, 222, 333]]]];

// var b = a.flat(Infinity);
// console.log(b);

// var a = [];
// console.log(typeof a);

// var check = Array.isArray(a);
// if (check) {
//   a[0] = "ABC";
//   console.log(a);
// } else {
//   console.log("a is not array");
// }

// var a = ["a", "b", "c"];
// a[2] = 123;
// // console.log(a[1]);
// console.log(a);

// var obj = {
//   id: 1,
//   name: "ABC",
// };
// obj["name"] = "XYZ";
// // console.log(obj["id"]);
// console.log(obj);

// var credentialMatched = false;

// if (credentialMatched) {
//   window.location.assign("../index.html");
// }

// var a = "1001";
// a = +a;
// a = parseInt(a);
// a = parseFloat(a);
// a = Number(a);

// var a = 0.22222;

// a = a.toFixed(2);
// console.log(a);

// var dt = new Date();
// console.log(dt);
// console.log(dt.getMonth());
// console.log(dt.getFullYear());
// console.log(dt.getHours());
// console.log(dt.getMinutes());
// console.log(dt.getSeconds());
// console.log(dt.getMilliseconds());
// console.log(dt.getTime());

// function abc() {
//   return "ABCXYZ123";
// }

// var a = abc()

var inp = document.getElementById("p");
console.log(inp.innerHTML)
