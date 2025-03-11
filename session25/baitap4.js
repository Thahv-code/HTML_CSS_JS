function demsonguyenduong(array) {
    let count = 0;
    if (Array.isArray(array)) {
        console.log("không hợp lệ");
        for (let i = -1; i < array.length - 1; i++){
            if (Number.isInteger(array[i + 1]) && array[i + 1] > 0) {
                count ++
            }
        }
    }
}