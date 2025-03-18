let product = [];
let choice;
while (choice != 7) {
  console.log("1. Thêm sản phẩm vào danh sách");
  console.log("2. Hiện thị tất cả sản phẩm");
  console.log("3. Hiện thị chi tiết sản phẩm theo ID");
  console.log("4. Cập nhật thông tin sản phẩm theo id");
  console.log("5. Xóa sản phẩm theo ID");
  console.log("6. Lọc sản phẩm theo khoảng giá");
  console.log("7. Thoát");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      const newProduct = {
        id: +prompt("Nhập id cho sản phẩm"),
        name: prompt("Nhập tên sản phẩm"),
        price: +prompt("Nhập giá sản phẩm"),
        category: prompt("Nhập danh mục sản phẩm"),
        quantity: +prompt("Nhập số lượng sản phẩm"),
      };
      product.push(newProduct);
      console.log("Thêm thành công sản phẩm");
      break;
    case 2:
      console.table(product);
      break;
    case 3:
      searchID = +prompt("Nhập ID sản phẩm bạn muốn tìm kiếm: ");
      for (let i = 0; i < product.length; i++) {
        if (product[i].id == searchID) {
          console.table(product[i]);
        } else {
          console.log("Không tồn tại sản phẩm");
        }
      }
      break;
    case 4:
      updateID = +prompt("Nhập ID sản phẩm bạn muốn cập nhật thông tin: ");
      for (let i = 0; i < product.length; i++) {
        if (product[i].id == updateID) {
          let choose;
          while (choose != 5) {
            console.log("1. Name");
            console.log("2. Price");
            console.log("3. Category");
            console.log("4. Quantity");
            console.log("5.Thoát");

            choose = +prompt("Nhập lựa chọn của bạn: ");
            switch (choose) {
              case 1:
                product[i].name = prompt("Nhập tên mới cho sản phẩm: ");
                break;
              case 2:
                product[i].email = prompt("Nhập giá mới cho sản phẩm: ");
                break;
              case 3:
                product[i].phone = prompt("Nhập danh mục mới cho sản phẩm: ");
                break;
              case 4:
                console.log("Nhập số lượng mới cho sản phẩm:");
                break;
              default:
                console.log("Lựa chọn không hợp lệ");
            }
            console.log("Cập nhật thành công");
            2;
            break;
          }
        } else {
          console.log("ID không tồn tại");
        }
      }
      break;
    case 5:
      let deleteID = +prompt("Nhập ID sản phẩm bạn muốn xóa: ");
      for (let i = 0; i < product.length; i++) {
        if (product[i].id == deleteID) {
          product.splice(i, 1);
          console.log("Xóa thành công");
        } else {
          console.log("ID không tồn tại");
        }
      }
      break;
    case 6:
      let count = 0;
      let start = +prompt("Nhập giá bắt đầu: ");
      let end = +prompt("Nhập giá kết thúc: ");
      for (let i = 0; i < product.length; i++) {
        if (start < product[i].price && product[i].price < end) {
          console.table(product[i]);
          count++;
        }
      }
      if (count == 0) {
        console.log("Không có sản phẩm nào");
      }
      break;
  }
}
