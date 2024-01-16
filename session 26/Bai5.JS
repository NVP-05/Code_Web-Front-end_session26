let n = +prompt("Nhập số phần tử trong mảng.");
let numbers = [];
let p = 0;
let temp = [];
for (let i = 0; i < n; i++) {
  let m = +prompt(`numbers[${i}] = `);
  numbers.push(m);
}
const newNumbers = numbers.reverse();
console.log("Các phân tử trong mảng đảo ngược là: ", newNumbers);
