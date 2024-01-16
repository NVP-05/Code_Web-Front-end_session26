let n = +prompt("Nhập số phần tử có trong mảng.");
let numbers = [];
let newNumbers = [];
let sum = 0;
for (let i = 0; i < n; i++) {
  let m = +prompt(`numbers[${i}] = `);
  numbers.push(m);
}
let check = +prompt("Nhập 1 số nguyên bất kỳ.");

for (let i = 0; i < n; i++) {
  if (sum == check) {
    break;
  }
  newNumbers = [];
  sum = numbers[i];
  newNumbers[0] = numbers[i];
  for (let j = i + 1; j < n; j++) {
    sum += numbers[j];
    newNumbers.push(numbers[j]);
    if (sum == check || sum > check) {
      break;
    }
  }
}

console.log(newNumbers);
