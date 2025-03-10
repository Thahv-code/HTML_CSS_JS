let arr = [];
while (1) {
    console.log(`
    =======================
    1. Nhập mảng
    2. Hiện mảng
    3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
    4. Tính tổng các phần tử trong mảng
    5. Tìm số lần xuất hiện của một phần tử trong mảng
    6. Sắp xếp theo thứ tự tăng dần
    7. Thoát
    =======================
    `);

    let choice = +prompt("Nhập lựa chọn của bạn:");

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
            let max = arr[0];
            let min = arr[0];
            for (let number of arr) {
                if (number > max) {
                    max = number;
                }
                if (number < min) {
                    min = number;
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là ${max}`);
            console.log(`Phần tử nhỏ nhất trong mảng là ${min}`);
            break;
        case 4:
            break;
        case 5:
            let inputnumber = +prompt("Nhập số bất kỳ: ");
            let count = 0;
            for (let num of arr) {
                if (inputnumber == num) {
                    count++;
                }
            }
            document.write("Số " + inputnumber + " xuất hiện " + count + " lần");
            break;
        case 6:
            arr.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp tăng dần: ", arr);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không đúng, vui lòng nhập lại");
            break;
    }

    if (choice === 7) {
        break;
    }
}
