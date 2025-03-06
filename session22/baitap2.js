let arr = [2, 5, 7, 4, 1, 8, 6];
let n = +prompt("Mời bạn nhập 1 số bất kì:")
let flag = 0;
if (Number.isInteger(n)) {
    for (let i = 0; i < arr.length; i++) {
        n   == arr[i] ? flag++ : flag
    }
    flag != 0 ? "Bingo" : "Chúc bạn may mắn lần sau"
}
