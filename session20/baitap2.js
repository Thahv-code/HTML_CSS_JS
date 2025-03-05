let n = +prompts("Mời bạn nhập 1 số bất kì");
if (Number.isInteger(n) && n > 0) {
    for (let i = 0; i <= n; i++){
        (i%5==0) ? console.log(i) : console.log(" ");
    }
} 