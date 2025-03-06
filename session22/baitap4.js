let daySo = prompt("Nhập vào một dãy số:");

if (!/^\d+$/.test(daySo)) {
    console.log("Dãy số không hợp lệ!");
} else {
    let mangSo = daySo.split("");
    let soLonNhat = 0;

    for (let i = 0; i < mangSo.length; i++) {
        if (mangSo[i] > soLonNhat) {
            soLonNhat = mangSo[i];
        }
    }

    console.log(soLonNhat + " là số lớn nhất trong dãy số");
}  