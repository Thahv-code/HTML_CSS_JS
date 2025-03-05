let money = +prompt("nhap so tien ban muon gui: ");
let rate = +prompt("Nhap lai suat: ");
let month = +prompt("nhap so thang ban muon gui: ");
let reult = 0;
let sum = 0;
for (let i = 0; i < month; i++) {
    result = money + ((money / 100) * rate);
    money = result;
}
document.write(result);