let numbersArray = [
  1,
  2,
  "Hùng Anh óc cức",
  6,
  4,
  "Ling ngu",
  123,
  656,
  45,
  4,
  "Tôm Đú",
];
for (let i = 0; i < numbersArray.length; i++) {
  if (Number.isInteger(numbersArray[i])) {
    console.log(numbersArray[i]);
  }
}
