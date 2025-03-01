let number = prompt("Nhập số năm kinh nghiệm của nhân viên : ");
if (number < 1) {
    document.write("Mới vào nghề");
}
else if (number < 4) {
    document.write("Nhân viên có kinh nghiệm");
}
else if (number < 7) {
    document.write("Chuyên viên");
}
else {
    document.write("Quản lý");
}