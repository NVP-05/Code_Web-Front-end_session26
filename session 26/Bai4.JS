let a = +prompt("Nhập 1 số nguyên dương a.");
let b = +prompt("Nhập 1 số nguyên dương b.");
let numbers = [];
if (a > b) {
  for (let i = 1; i <= a; i++) {
    if (i % b == 0) {
      numbers.push(i);
    }
  }
  console.log("Các số chia hết cho b là: ", numbers);
} else if (a < b) {
  for (let i = 1; i <= b; i++) {
    if (i % a == 0) {
      numbers.push(i);
    }
  }
  console.log("Các số chia hết cho a là: ", numbers);
} else {
  console.log("a đã chia hết cho b hoặc b đã chia hết cho a.");
}
