let str = "";
while (1) {
    let choice = +prompt(`
    1. Nhập chuỗi ký tự \n
    2. Hiển thị chuỗi ký tự \n
    3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện \n
    4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi \n
    5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi \n
    6. Chuyển đổi chuỗi ký tự thành dạng snake_case \n
    7. Thoát
    `);

    switch (choice) {
        case 1:
            let n = +prompt("Nhập độ dài cho mảng: ");
            if (n > 0) {
                for (let i = 0; i < n; i++) {
                    arr[i] = +prompt(`Nhập phần tử thứ ${i}: `);
                }
                console.log("Thêm thành công.");
            }
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let words = str.toLowerCase().split();
            let wordCount = {};
            for (let word of words) {
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
            console.log("Từ trùng lặp và số lần xuất hiện:", wordCount);
            break;
        case 4:
            let wordArr = str.split(/\s+/);
            let maxWord = wordArr.reduce((a, b) => (a.length >= b.length ? a : b));
            let minWord = wordArr.reduce((a, b) => (a.length <= b.length ? a : b));
            console.log(`Từ dài nhất: ${maxWord}`);
            console.log(`Từ ngắn nhất: ${minWord}`);
            break;
        case 5:
            let number = +prompt("nhap so bat ki: ");
            let count = 0;
            for (let num of arr) {
                if (number == num) {
                    count++;
                }
            }
            document.write("So " + number + " xuat hien " + count + " lan");
            break;
        case 6:
            string = string.split(" ").join("_");   
            console.log("Chuỗi dạng snake_case:", str);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không đúng, vui lòng nhập lại.");
            break;
    }
    if (choice === 7) {
        break;
    }
}
