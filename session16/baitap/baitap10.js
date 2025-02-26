let fistNumber = +prompt("Mời bạn nhập số thứ nhất");
let secondNumber = +prompt("Mời bạn nhập số thứ hai");
Math.random(fistNumber, secondNumber);
let randomNumber = Math.floor(Math.random() * (secondNumber - fistNumber + 1)) + fistNumber;
alert(`Số ngẫu nhiên trong khoảng từ ${fistNumber} đến ${secondNumber} là: ${randomNumber}`);
