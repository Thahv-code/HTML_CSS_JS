let math = prompt("moi ban nhập điểm toán");
let enlish = prompt("Mời bạn nhập điểm tiếng anh");
let literature = prompt("Mời bạn nhập điểm môn văn");
let total = math + enlish + literature / 3
if (total < 5) {
    console.log("Yếu");
}
else if (total < 6.4) {
    console.log("Trugn binh")
}
else if (total < 7.9) {
    console.log("Khá")
}
else if (total >= 8) {
    console.log("Giỏi")
}