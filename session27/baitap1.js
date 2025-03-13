function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let choice;
do {
  console.log("===MENU===");
  console.log("1. Cộng 2 số");
  console.log("2. Trừ 2 số");
  console.log("3. Nhân 2 số");
  console.log("4. Chia 2 số");
  console.log("5. Thoát");
  choice = +prompt("Vui lòng chọn một tùy chọn:");

  let firstNumber, secondNumber, result;
  firstNumber = +prompt("Mời bạn nhập số thứ nhất:");
  secondNumber = +prompt("Mời bạn nhập số thứ hai:");
  switch (choice) {
    case 1:
      result = sum(firstNumber, secondNumber);
      console.log(`Kết quả của phép cộng: ${result}`);
      break;
    case 2:
      result = subtract(firstNumber, secondNumber);
      console.log(`Kết quả của phép trừ: ${result}`);
      break;
    case 3:
      result = multiply(firstNumber, secondNumber);
      console.log(`Kết quả của phép nhân: ${result}`);
      break;
    case 4:
      result = divide(firstNumber, secondNumber);
      console.log(`Kết quả của phép chia: ${result}`);
      break;
    case 5:
      console.log("Thoát chương trình.");
      break;
    default:
      console.log("Vui lòng nhập lại.");
      break;
  }
} while (choice !== 5);
