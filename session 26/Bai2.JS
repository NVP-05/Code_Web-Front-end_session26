let n = prompt("Nhập vào 1 giá trị bất kỳ.");
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
  "Thầy Cường Đô La",
  "Thầy Phú Quý Bò Viên",
  "Thầy An Ninh Trật Tự",
  789,
  445,
  333,
  222,
];
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] == n) {
    console.log("Vị trí của phần tử trong mảng là: ", i);
  }
}
