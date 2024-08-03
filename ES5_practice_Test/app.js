function nextStudents(qty) {
  let a = Math.ceil(Math.random() * qty);
  alert(`Next Student Number is ${a}`);
}

var obj = [
  { id: 1, Product: "Shorts" },
  { id: 2, Product: "Shorts" },
  { id: 3, Product: "Shorts" },
];

const Html = `<ul>
    ${obj.map((item) => "<li>" + item.Product + "<li>").join("\n")}
</ul>`;

console.log(Html);
