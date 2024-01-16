let n = prompt("Nhập số phần tử có trong mảng");
let numbers = [];
let a = 0;
for (let i = 0; i < n; i++) {
  m = +prompt(`numbers[${i}] = `);
  numbers.push(m);
}
let b = +prompt("Nhập 1 số nguyên bất kỳ.");
for (let i = 0; i < n; i++) {
  if (numbers[i] == b) {
    a++;
  }
}
console.log("Số lần xuất hiện của" + " " + b + " " + "là:" + " " + a);
