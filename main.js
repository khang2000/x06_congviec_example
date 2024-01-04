let arr = [10, 20, 30, 40, 50];

// Tìm vị trí đầu tiên của giá trị 30 trong mảng
let position = arr.indexOf(30);
console.log(position); // Kết quả: 2

let strA = "apple";
let strB = "banana";

let comparison = strA.localeCompare(strB);
if (comparison === 0) {
  console.log("Chuỗi bằng nhau.");
} else if (comparison < 0) {
  console.log("Chuỗi A đứng trước chuỗi B.");
} else {
  console.log("Chuỗi B đứng trước chuỗi A.");
}

function sumFromZeroToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

sumFromZeroToN(3);

const number = [4, 2, 5, 1, 3];

// Sắp xếp mảng theo thứ tự tăng dần
number.sort((a, b) => a - b);

console.log(number); // Kết quả sẽ là [1, 2, 3, 4, 5]

let numbers = [1, 2, 3, 4, 5];

// xóa phần tử đầu tiên của mảng
numbers.shift();
console.log(numbers); // Kết quả: [2, 3, 4, 5]
