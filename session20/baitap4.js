let flag = 0;
let str = prompt("Nhập chuỗi cần kiểm tra:");
let search = prompt("Nhập ký tự cần tìm:");
for (let i = 0; i < str.length; i++) {
    if (str[i] == search) {
        flag = 1;
        break;
    }
}
flag == 1? console.log("tồn tại") : console.log("Không tồn tại")