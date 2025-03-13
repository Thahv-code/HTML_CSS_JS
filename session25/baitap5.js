function number(arr) {
  let count = 0;
  for (let num of arr) {
    num > 0 && num % 1 == 0 ? count++ : count;
  }
  count > 0 ? console.log(count) : console.log("khong co so nguyen duong");
}
let arr = [1, -2, 2.3, 3, 4];
number(arr);
