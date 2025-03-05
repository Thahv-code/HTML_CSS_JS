let a = 0;
let b = 0;
let c = 0;
for (let i = 100; i <= 999; i++) {
    a = Math.floor(i / 100);
    b = Math.floor((i - (a * 100)) / 10);
    c = i - (a * 100) - (b * 10);
    if (i == (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))) {
        document.write(i, " ");
    }
} 