let number = prompt("Mời bạn nhập dãy số bất kì");
if (Number.isInteger(Number(number))) {
    let reverse = number.split("").reverse().join("");
    console.log("reverse");
} else {
    console.log("Dãy k hợp lệ")
}