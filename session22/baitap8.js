let arr = [5,5,5,5,9,9,9,9,9]; 
let maxCount = 0;
let minElement;
let number = 0;
for (let i = 0; i < number.length;i++) {
    let count = 0;
    for (let j = 0; j < 10; j++) {
        if (arr[i]==arr[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
    }
}
document.write(maxCount);