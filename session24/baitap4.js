let arr = [];
let choice;

do {
    choice = parseInt(prompt(`Chọn chức năng:\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và chỉ số của nó\n4. Tính tổng và trung bình cộng của các số dương\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n7. Thoát`));

    if (choice === 1) {
        let input = prompt("Nhập các số nguyên, cách nhau bởi dấu cách:");
        arr = input.split(" ").map(Number);
    } else if (choice === 2) {
        console.log("Mảng hiện tại:", arr);
    } else if (choice === 3) {
        if (arr.length === 0) {
            console.log("Mảng rỗng!");
        } else {
            let max = arr[0];
            let index = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    index = i;
                }
            }
            console.log("Phần tử lớn nhất:", max, "tại chỉ số:", index);
        }
    } else if (choice === 4) {
        let sum = 0, count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i];
                count++;
            }
        }
        if (count === 0) {
            console.log("Không có số dương trong mảng!");
        } else {
            console.log("Tổng các số dương:", sum);
            console.log("Trung bình cộng các số dương:", sum / count);
        }
    } else if (choice === 5) {
        arr.reverse();
        console.log("Mảng sau khi đảo ngược:", arr);
    } else if (choice === 6) {
        let isPalindrome = true;
        for (let i = 0; i < Math.floor(arr.length / 2); i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }
        if (isPalindrome) {
            console.log("Mảng đối xứng!");
        } else {
            console.log("Mảng không đối xứng!");
        }
    } else if (choice === 7) {
        console.log("Thoát chương trình.");
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);