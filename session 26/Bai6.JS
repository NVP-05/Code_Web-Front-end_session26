let n = +prompt("Nhập số phần tử trong mảng.");
let numbers = [];
let newNumbers = [];
for (let i = 0; i < n; i++) {
  let m = +prompt(`numbers[${i}] = `);
  numbers.push(m);
}
for (let i = 0; i < n; i++) {
  if (numbers[i] < 0) {
    newNumbers.unshift(numbers[i]);
  } else {
    newNumbers.push(numbers[i]);
  }
}
console.log(
  "Các phần tử trong mảng sau khi đảo số âm lên đầu là: ",
  newNumbers
);
