// //Cách 1: Array literral
// const cources = ["HTML", 1, null, NaN, undefined, true];

// console.log(cources);

// // Cách 2: Dùng đối tượng Array
// const array = new Array("HTML", "CSS");
// console.log(array);

// // Kiểm tra độ dài của mảng
// const arrayLength = cources.length;
// console.log("Độ dài của mảng:", arrayLength);

// // Truy xuất vào các phần tử của mảng
// console.log(cources[1]);

// // Lặp qua các phần tử của mảng
// for (let i = 0; i < cources.length; i++) {
//   // i tượng trưng cho index (vị trí)
//   console.log(i);
//   console.log(cources[i]);
// }

// // Một số công thức làm việc với mảng
// // 1. Thêm phần tử vào cuối mảng
// cources.push("Javascript");
// console.log("Mảng sau khi push: ", cources);

// // Xóa phần tử cuối mảng
// const itemDelete = cources.pop();
// console.log("Phần tử vừa xóa: ", itemDelete);
// console.log("Mảng sau khi pop: ", cources);

// // 3. Thêm phần tử ở đầu mảng
// cources.unshift("PHP");
// console.log("Mảng sau khi unshift:", cources);

// // 4. Xóa phần tử đầu

// const itemDelete1 = cources.shift();
// console.log("Phần tử vừa xóa: ", itemDelete1);
// console.log("Mảng sau khi pop: ", cources);

// // 5. Chuyển đổi mảng thành 1 chuỗi
// const arrayConvertoString = cources.toString();
// console.log("Mảng sau khi toString: ", arrayConvertoString);

// // 6. Chuyển đổi mảng thành 1 chuỗi bằng join()

// const newArray = array.join(" - ");
// console.log("Mảng sau khi join: ", newArray);

// console.log("Hello World");

// let student1 = "Xuân Đức";
// let student2 = "Thái Anh";
// let student3 = "Trường Con";

// let studentN = "Đắc Sơn";

// Khai báo

// Array constructor funcion
// let studentList = new Array(student1, student2, student3, studentN);
// console.log("Danh sách Sinh Viên: ", studentList);

// let numberList = [10, 20, 30, 40, 50, 60];
// console.log("Danh sách số numbers: ", numberList);

// let randomList = [true, false, 10, 20, "Đức Cớp", "Thái Anh", []];
// console.log("Danh sách randomList: ", randomList);

// let students = [
//   "Dũng Hoàng Tử Long Biên", // item  (0) - index (chỉ số)
//   "Đức Mèn Mén", // element - Phần tử (1)
//   "Phúc Nem + Tử Vi", //      (2)
//   "Link XÔ", //      (3)
//   "Fank Xích Lô", //      (4) - (students.length - 1)
// ];

// console.log("Danh sách students =", students);

// // Array Length/size, thuộc tính length của mảng
// console.log("Số lượng phần tử trong mảng studens =", students.length); // 5

// console.log("Danh sách món ăn: ", foodList);

// // 1. Read
// // Read One
// console.log("Xuân Đức Ăn", foodList[2]); // "Pịa"
// console.log("Trí Đức Ăn", foodList[0]); // "Thịt Chó"
// console.log("Tùng Bú", foodList[3]); // "Mèn Mén"

// // Read All
// // for (let i = 0; i < foodList.length; i++) {
// //   console.log(` Món ăn tại vị trí ${i}:`, foodList[i]);
// // }

// // for (let food of foodList) {
// //   console.log("Từng món ăn", food);
// // }

// for (let index in foodList) {
//   console.log(` Món ăn ${index}`, foodList[index]);
// }

// // Thêm đầu
// foodList.unshift("Mắm Tôm");

// console.log("Danh sách món ăn sau khi được thêm mới: ", foodList);

// // Thêm cuối
// foodList.push("Đầu Rồng");
// console.log("Danh sách món ăn sau khi được thêm mới: ", foodList);

// // Thêm vào vị trí bất kỳ
// foodList.splice(2, 0, "BBH");
// console.log("Danh sách món ăn sau khi được thêm mới: ", foodList);

let foodList = [
  "Thịt Chó", // 0
  "Tiểu Hổ", // 1
  "Pịa", // 2
  "Mèn Mén", // 3
  "Nem Chua", // 4
  "Phở Chua", // foodList.length - 1 (5)
];

console.log("Danh sách món ăn: ", foodList);

foodList[5] = "Bún Chua";
console.log("Danh sách foodList sau khi được cập nhật: ", foodList);

// Xóa đầu
foodList.shift();
console.log("Danh sách foodList sau khi được xóa: ", foodList);

// Xóa cuối
foodList.pop();
console.log("Danh sách foodList sau khi được xóa: ", foodList);

// Xóa vị trí bất kỳ
foodList.splice(1, 1);
console.log("Danh sách foodList sau khi được xóa: ", foodList);
