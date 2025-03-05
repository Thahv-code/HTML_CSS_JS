let number = +prompt("mời bạn nhập 1 số bất kì");
if (Number.isInteger(number)) {
    for (let i = 1; i <= Math.abs(number); i++)
        if (number % i == 0)
    console.log(i)
}