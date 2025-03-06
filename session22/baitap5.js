
let mangSo = [];
for (let i = 0; i < 5; i++) {
    mangSo.push(Math.floor(Math.random() * 10) + 1);
}
console.log("Mảng số ngẫu nhiên: " + mangSo);
let tongSoLe = 0;
let tongSoChan = 0;
for (let i = 0; i < mangSo.length; i++) {
    if (mangSo[i] % 2 === 0) {
        tongSoChan += mangSo[i];
    } else {
        tongSoLe += mangSo[i];
    }
}
console.log("Tổng các số chẵn: " + tongSoChan);
console.log("Tổng các số lẻ: " + tongSoLe);