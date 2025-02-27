let a = +prompt("Nhap so thu nhat");
let b = +prompt("Nhap so thu hai");
let c = +prompt("Nhap so thu ba");
let delta = b * b - 4 * a * c;
let x1, x2;
if (delta < 0) {
    document.write("Phuong trinh vo nghiem");

}
else if (delta = 0) {
    x1 = -b / (2 * a);
    document.write("Phuong trinh co nghiem kep la: ", x1);
}
else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write("Phuong trinh co 2 nghiem phan biet la: ", x1, " va ", x2);
}