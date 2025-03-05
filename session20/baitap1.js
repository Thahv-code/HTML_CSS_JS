let n = +prompt("Mời bạn nhập 1 số bất kì:");
let sum = 0;
// B2: KIểm tra có phải là số nguyên
if (Number.isInteger(n) && n > 0) {
    for (let i = 1; i <= n; i++) {
        sum *= i;
    }
}
console.log(sum);