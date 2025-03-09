let n = +prompt("Nhập số phần tử trong chuỗi: ");
let count = 0;
if (n > 0) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt("nhập phần tử cho mảng: ");

    }
    for (let num of arr) {
        num > 0 ? count : count++;
    }
    count > 0 ? document.write(`có ${count} số nguyên âm`) : document.write("không có số nguyên âm trong mảng");
}
else if (n == 0) {
    document.write("không có phần tử trong mảng");
}
else if (n < 0) {
    document.write("độ dài không hợp lệ");
}