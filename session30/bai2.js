let cart = [];
let choice;
let products = []; 
while (choice != 5) {
    console.log("1. Hiển thị các sản phẩm theo tên danh mục.");
    console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");
    console.log("3. Tìm kiếm sách theo tên hoặc id.");
    console.log("4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).");
    console.log("5. Sắp xếp theo giá")
    console.log("6. Tính số tiền thanh toán trong giỏ hàng.");
    console.log("7. Hiển thị số lượng sách trong kho")
    console.log("8. Thoát.");
  choice = +prompt("Mời nhập lựa chọn của bạn");
  switch (choice) {
    case 1:
      console.table(products);
      break;
    case 2:
      const productId = +prompt("Nhập ID sản phẩm:");
      const selectedProduct = products.find((p) => p.id === productId);
      if (selectedProduct) {
        console.log("Đã chọn sản phẩm:", selectedProduct.name);
      } else {
        console.log("Không tìm thấy sản phẩm!");
      }
      break;
    case 3:
      const keyword = prompt("Nhập tên hoặc ID sách để tìm:");
      const foundProducts = products.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword.toLowerCase()) ||
          p.id === +keyword
      );
      if (foundProducts.length) {
        console.table(foundProducts);
      } else {
        console.log("Không tìm thấy sách phù hợp!");
      }
      break;
    case 5:
      const sortOption = prompt("Nhập lựa chọn (1: Tăng dần, 2: Giảm dần):");
      products.sort((a, b) =>
        sortOption == 1 ? a.price - b.price : b.price - a.price
      );
      console.table(products);
      break;
    case 4:
      const bookId = +prompt("Nhập ID sách bạn muốn mua:");
      const bookToBuy = products.find((p) => p.id === bookId);

      if (bookToBuy) {
        const quantityToBuy = +prompt(
          `Nhập số lượng sách muốn mua (Kho hiện có: ${bookToBuy.quantity}):`
        );

        if (quantityToBuy > 0 && quantityToBuy <= bookToBuy.quantity) {
          // Cập nhật giỏ hàng
          const existingCartItem = cart.find(
            (item) => item.id === bookToBuy.id
          );
          if (existingCartItem) {
            existingCartItem.quantity += quantityToBuy;
          } else {
            cart.push({ ...bookToBuy, quantity: quantityToBuy });
          }

          // Cập nhật lại kho
          bookToBuy.quantity -= quantityToBuy;
          console.log(
            `Bạn đã thêm ${quantityToBuy} cuốn "${bookToBuy.name}" vào giỏ hàng.`
          );
        } else {
          console.log("Số lượng không hợp lệ hoặc vượt quá kho hiện có!");
        }
      } else {
        console.log("ID sách không hợp lệ!");
      }
      break;
    default:
      console.log("vui lòng nhập lại");
      break;
  }
}
