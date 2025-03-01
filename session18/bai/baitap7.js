let numberA = +prompt("Mời bạn nhập vào số a: ");
let numberB = +prompt("Mời bạn nhập vào số b: ");
let symbol = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");
switch (symbol) {
    case "+":
        alert("Kết quả của " + numberA + " + " + numberB + " = " + (numberA + numberB));
        break;
    case "-":
        alert("Kết quả của " + numberA + " - " + numberB + " = " + (numberA - numberB));
        break;
    case "*":
        alert("Kết quả của " + numberA + " * " + numberB + " = " + (numberA * numberB));
        break;
    case "/":
        alert("Kết quả của " + numberA + " / " + numberB + " = " + (numberA / numberB));
        break;
    default:
        alert("Phép tính không hợp lệ");
        break;
}