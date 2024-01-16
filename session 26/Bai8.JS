let n = +prompt("Nhập số phần tử trong mảng");
let numbers = [];
let newNumbers = [];
for (let i = 0; i < n; i++) {
  let m = +prompt(`numbers[${i}] = `);
  numbers.push(m);
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (numbers[j] == numbers[i]) {
      for (let k = 0; k < newNumbers.length; k++) {
        if (numbers[j] != newNumbers[k]) {
          newNumbers.push(numbers[i]);
        }
      }
    }
  }
}
console.log(newNumbers);
