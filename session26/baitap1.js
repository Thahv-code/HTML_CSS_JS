function larger(number) {
    if (Array.isArray(number) == false) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    if (number.length == 0) {
        console.log("mảng không có phần tử");
        return;
    }
    let overTen = number[0];
    for (let i = 0; i < number.length; i++){
        if (overTen < number[i]) {
            overTen = number[i];
        }
    }
    console.log(overTen);
    return overTen;
}
larger([1, 2, 3, 10, 20]);
larger([2, 3, 4, 10])
