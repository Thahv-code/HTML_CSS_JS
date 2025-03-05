let chan = 0;
let le = 0;
for (let i = 0; i < 5; i++) {
    let num = +prompt("Mời bạn nhập số thứ " + (i + 1));
    if (num % 2 === 0) {
        chan ++;
    } else {
        le ++;
    }
} console.log("so luong so chan" + chan + "so luong so le" + le);