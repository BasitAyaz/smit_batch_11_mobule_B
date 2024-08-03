// optional chaning
// nullish

// let obj = {
//     adress: {
//         city : "abc"
//     }
// }
// console.log(obj.adress?.city);

// let a = "abc";
// // let b = a ? a : "--";
// let b = a ?? "--";

//#region default Types

// let a = 10
// a = "abc"

// let a = "abc";
// // a = 0
// a = "xyz";

// let a = true;
// a = "asd"

// let a = []
// a.push("ac")

// let a = ["abc"];
// a.push("xyz")
// a.push(2)

// let a = ["abc",123]
// a.push("abc")
// a.push(456)
// a.push(true)

// let obj = {
//     id:1,
//     name:'abc'
// }

// obj.id = "a"
// obj.name = "asd"
// obj.inst = ""

//#endregion

//#region premitive types

// let a:string = "AJHS"
// let a: string;
// a = "asdhj";

// let a:number;
// a = "asdasd"

// let a: boolean;
// a = false;
// a = "false";

// let a: string[] = ["abc", "xyz", 123];
// let b: number[] = ["abc", "xyz", 123];
// let c: boolean[] = ["abc", "xyz", 123, false];
// let d: (number | string)[] = ["abc", "xyz", 123];
// let e:any = ["asdasd"]
// e.push(20)

// let obj: {
//   id: number;
//   name: string;
// } = {
//   id: 5,
//   name: "ABC",
// };

//#endregion

//#region custom types

// type objType = {
//   id: number;
//   name: string;
// };

// let a: objType[] = [
//   {
//     id: 1,
//     name: "asd",
//   },
// ];

// type objType = {
//   id: number;
//   name: string;
//   inst?: string;
// };

// let obj: objType = {
//   id: 1,
//   name: "ASD",
// };
// obj.inst = "AS";

// type objType = {
//   id: number;
//   name: string;
//   status: "approved" | "unapproved";
// };
// let obj: objType = {
//   id: 2,
//   name: "ahsd",
//   status: "approved",
// };

// interface objInterface {
//   id: number;
//   name: string;
// }

// interface instInterface extends objInterface {
//   instId: number;
//   inst: string;
// }

// let obj: instInterface = {
//   id: 5,
//   name: "asd",
//   inst: "ABC",
//   instId: 30,
// };

//#endregion

//#region types in function

let abc = (a: number, b: number) => {
  console.log(a + b);
};
abc(10, 20);

// let a = (): void => {};
let a = (): string => "";

//#endregion
