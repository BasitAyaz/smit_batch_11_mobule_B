//#region 1) var let const

// var

// re-initialization (y)
// re-declaration (y)
// block scope (n)
// hoisting (y)

// let

// re-initialization (n)
// re-declaration (y)
// block scope (y)
// hoisting (n)

// const
// re-initialization (n)
// re-declaration (n)
// block scope (y)
// hoisting (n)

// if (true) {
//   var a = 10;
// }
// console.log(a);

// function abc() {
//   var a = 10;
// }
// abc();

// console.log(a);

//#endregion

//#region 2) Template Litral

// let a = "Abdul Basit Ahmed";
// let b = "my name is " + a;

// console.log(b);

// let a = 7;

// let b = `the square root of ${a} is ${a * a}`;
// console.log(b);

// let a = `asdasdasda sad as dasd as
// d asd as da sd`;
// console.log(a);

//#endregion

//#region 3) Ternary Operator

// let condition = false;

// if (condition) {
//   console.log("True Condition Work");
// } else {
//   console.log("False Condition Work");
// }

// let condition = true;

// condition
//   ? console.log("True Condition Works")
//   : console.log("False Condition Works");

// let age = 12;
// let studenCard = false;

// age > 17
//   ? console.log("Allow")
//   : studenCard
//   ? console.log("Allow on Student Card")
//   : console.log("Not Allow");

// age > 17 || studenCard ? console.log("Allow") : console.log("Not Allow");

//#endregion

//#region 4) Circuits

// let condition = 10;

// let a = condition && "ABC";
// console.log(a);

//#endregion

//#region 5) Pass By Value and Pass By Reference

// let a = {
//   id: 1,
//   name: "ABC",
// };

// let b = a;
// b.inst = "SMIT";

// console.log(a);

// let a = [1, 2, 3];
// let b = a;
// b.push("ABC");
// console.log(a);

//#endregion

//#region 6) Spread Operator

// let a = [1, 2, 3];
// let b = [...a];
// b.push("ABC");
// console.log(a, b);

// let a = [1, 2, 3];
// let b = ["A", "B", "C"];
// let c = [...a, ...b];
// console.log(c);

// let a = {
//   id: 1,
//   name: "ABC",
// };
// let b = {
//   inst: "ABC",
// };

// let c = {
//   ...a,
//   ...b,
// };

// console.log(c);

//#endregion

//#region 7) Rest Operator
// function abc(a, b, c, ...abc) {
//   console.log(a, b, c, abc);
// }

// abc(1, 2, 3, 4, 5, 6, 7, 8, 9);

//#endregion

//#region 8) Destructure Array and Objects

// let a = [1, 2, 3, 4];
// let [firstIndex, secondIndex, , index4] = a;
// console.log(index4);

// let b = {
//   id: 1,
//   name: "ABC",
//   age: 18,
// };

// let { name, id } = b;

// console.log(id, name);

//#endregion

//#region 9) Object Methods

// let obj = {
//   id: 1,
//   name: "ABC",
//   age: 18,
//   inst: "SMIT",
// };

// let keys = Object.keys(obj);
// let val = Object.values(obj);
// let entries = Object.entries(obj);
// Object.freeze(obj);
// obj.name = "XYZ";

// console.log(obj);

//#endregion

//#region 10) functions

// a) ==== Heigher Order and call back Function

// function abc(a) {
//   return a;
// }

// function xyz(b) {
//   console.log(b);
// }

// xyz(abc("Hello :)"));

// function abc() {
//   console.log("ABC");
//   return function () {
//     console.log("Return hone wala function");
//   };
// }

// abc()();

// b) ==== Arrow Function

// function abc() {
//   console.log("ABC");
// }
// abc();

// let abc = () => {
//   console.log("ABC");
// };
// abc();

// let abc = a => {
//   console.log(a);
// };
// abc("ABC");

// let abc = (a, b) => "Return hone wala String";
// let a = abc()
// console.log(a);

// let a = _ => _
// let abc = a("This is Arrow Function")
// console.log(abc)

// c) ==== Closures
// d) ==== lexical Scoping

// let a = "xyz";
// function abc() {
//   let a = "abc";
//   console.log(a);
// }
// abc();

// e) ==== default perameter

// function abc(b = 1) {
//   let a = 420;
//   console.log(b * a);
// }

// abc();

//#endregion

//#region 11) Array Functions

// a) ==== map

// let a = [
//   {
//     id: 1,
//     name: "ABC",
//     category: "A",
//     fee: 500,
//     taxPercentage: 4,
//     isPass: true,
//   },
//   {
//     id: 2,
//     name: "JKL",
//     category: "B",
//     fee: 300,
//     taxPercentage: 5,
//     isPass: true,
//   },
//   {
//     id: 3,
//     name: "MNO",
//     category: "A",
//     fee: 500,
//     taxPercentage: 10,
//     isPass: true,
//   },
//   {
//     id: 4,
//     name: "RUY",
//     category: "B",
//     fee: 300,
//     taxPercentage: 3,
//     isPass: true,
//   },
//   {
//     id: 5,
//     name: "XYZ",
//     category: "A",
//     fee: 500,
//     taxPercentage: 5,
//     isPass: true,
//   },
// ];
// let b = a.map((x, i, z) => {
//   return x.id;
// });
// console.log(b);

// b) ==== filter

// let b = a.filter((x, i, a) => {
//   if (x.category == "B") {
//     return x;
//   }
// });
// console.log(b);

// c) ==== forEach

// let count = 0;
// a.forEach((x, i, list) => { 
//   x.inst = "SMIT";
//   let onePercent = x.fee / 100;
//   // x.taxPercentage
//   count += x.fee + onePercent * x.taxPercentage; // after adding tax
// });
// console.log(a, count);

// d) ==== reduce

// let b = a.reduce((x, y) => {
//   console.log(x, y.fee);
//   return y.fee + x;
// }, 0);

// console.log(b);
// let b = a.reduce((x, y) => {
//   console.log(x);
//   return y.fee;
// }, 0);

// console.log(b);

// let b = a.reduce((x, y) => {
//   if (x[y.category]) {
//     x[y.category].push(y);
//   } else {
//     x[y.category] = [];
//   }
//   return x;
// }, {});

// console.log(b);

// e) ==== some

// let b = a.some((x) => {
//   if (!x.isPass) {
//     return x;
//   }
// });
// console.log(b);

// f) ==== every

// let b = a.every((x) => x.isPass);
// console.log(b);

// g) ==== find

// let b = a.find((x, i, list) => x.id == 3);
// console.log(b);

// h) ==== findIndex

// let b = a.findIndex((x) => x.id === 10);
// console.log(b);

// i) ==== flat

// let arr = ["a", "b", "c", [1, 2, 3, ["xa", "xb", "xc"]]];
// let b = arr.flat(Infinity);
// console.log(b);

//#endregion

//#region 12) Promise

// syncronous

// let a;
// console.log("A");
// console.log(a);
// console.log("C");
// a = "B";

let zingerKaPromise = () => {
  return new Promise((resolve, reject) => {
    let koiKaamNikalwanaHai = true;
    // dost soch raha hai
    setTimeout(() => {
      if (koiKaamNikalwanaHai) {
        let obj = {
          message: "Han Khila Dunga",
          success: true,
        };

        resolve(obj);
      } else {
        let obj = {
          message: "Topi",
          success: false,
        };
        reject(obj);
      }
    }, 5000);
  });
};

// console.log("Promise Start");
// zingerKaPromise()
//   .then((res) => {
//     console.log(res, "Then Response");
//   })
//   .catch((err) => {
//     console.log(err, "catch Response");
//   });

let asyncFunc = async () => {
  console.log("Async Start");
  let res = await zingerKaPromise();
  console.log(res, "res");
};

asyncFunc();

//#endregion
