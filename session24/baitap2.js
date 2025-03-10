let arr = [];
let choice;

do {
    choice = parseInt(prompt(`Chọn chức năng:\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm số chẵn & lẻ\n4. Tính trung bình cộng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai\n7. Thoát`));

    if (choice === 1) {
        let input = prompt("Nhập các số nguyên, cách nhau bởi dấu cách:");
        arr = input.split(" ").map(Number);
    } else if (choice === 2) {
        console.log("Mảng hiện tại:", arr);
    } else if (choice === 3) {
        let chan = [];
        let le = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                chan.push(arr[i]);
            } else {
                le.push(arr[i]);
            }
        }
        console.log("Số chẵn:", chan);
        console.log("Số lẻ:", le);
    } else if (choice === 4) {
        if (arr.length === 0) {
            console.log("Mảng rỗng, không thể tính trung bình!");
        } else {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Trung bình cộng:", sum / arr.length);
        }
    } else if (choice === 5) {
        let index = parseInt(prompt("Nhập vị trí cần xóa:"));
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
            console.log("Mảng sau khi xóa:", arr);
        } else {
            console.log("Vị trí không hợp lệ!");
        }
    } else if (choice === 6) {
        if (arr.length < 2) {
            console.log("Mảng không đủ phần tử để tìm số lớn thứ hai!");
        } else {
            let max1 = arr[0];
            let max2 = -Infinity;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max1) {
                    max2 = max1;
                    max1 = arr[i];
                } else if (arr[i] > max2 && arr[i] !== max1) {
                    max2 = arr[i];
                }
            }
            if (max2 === -Infinity) {
                console.log("Không có số lớn thứ hai!");
            } else {
                console.log("Phần tử lớn thứ hai là:", max2);
            }
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);