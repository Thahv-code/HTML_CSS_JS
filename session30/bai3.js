let cart = [];
let choice;
let products = [
  { id: 1, name: "iPhone 13", price: 20000000, quantity: 10, company: "Apple" },
  {
    id: 2,
    name: "Galaxy S22",
    price: 18000000,
    quantity: 15,
    company: "Samsung",
  },
  {
    id: 3,
    name: "Xiaomi Mi 11",
    price: 12000000,
    quantity: 20,
    company: "Xiaomi",
  },
];

while (choice !== 9) {
  console.log("1. Hiển thị các sản phẩm theo hãng.");
  console.log("2. Thêm sản phẩm mới vào cửa hàng.");
  console.log("3. Tìm kiếm điện thoại theo tên hoặc id.");
  console.log("4. Mua điện thoại (Nhập id và số lượng).");
  console.log("5. Thanh toán giỏ hàng.");
  console.log("6. Sắp xếp điện thoại theo giá (Tăng/giảm dần).");
  console.log("7. Hiển thị tổng giá trị tất cả điện thoại trong kho.");
  console.log("8. Hiển thị tổng số lượng điện thoại theo hãng.");
  console.log("9. Thoát.");
  choice = +prompt("Mời nhập lựa chọn của bạn:");

  switch (choice) {
    case 1:
      const company = prompt(
        "Nhập tên hãng (Apple, Samsung, Xiaomi):"
      ).toLowerCase();
      const filteredProducts = products.filter(
        (p) => p.company.toLowerCase() === company
      );
      console.table(
        filteredProducts.length ? filteredProducts : "Không tìm thấy sản phẩm!"
      );
      break;
    case 2:
      const newProduct = {
        id: +prompt("Nhập ID sản phẩm:"),
        name: prompt("Nhập tên sản phẩm:"),
        price: +prompt("Nhập giá sản phẩm:"),
        quantity: +prompt("Nhập số lượng sản phẩm:"),
        company: prompt("Nhập hãng sản phẩm:"),
      };
      products.push(newProduct);
      console.log("Đã thêm sản phẩm mới thành công!");
      break;
    case 3:
      const keyword = prompt("Nhập tên hoặc ID sản phẩm để tìm:");
      const foundProducts = products.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword.toLowerCase()) ||
          p.id === +keyword
      );
      console.table(
        foundProducts.length ? foundProducts : "Không tìm thấy sản phẩm!"
      );
      break;
    case 4:
      const productId = +prompt("Nhập ID sản phẩm muốn mua:");
      const selectedProduct = products.find((p) => p.id === productId);
      if (selectedProduct) {
        const quantityToBuy = +prompt(
          `Nhập số lượng muốn mua (Số lượng có: ${selectedProduct.quantity}):`
        );
        if (quantityToBuy > 0 && quantityToBuy <= selectedProduct.quantity) {
          cart.push({ ...selectedProduct, quantity: quantityToBuy });
          selectedProduct.quantity -= quantityToBuy;
          console.log(
            `Đã thêm ${quantityToBuy} sản phẩm "${selectedProduct.name}" vào giỏ hàng.`
          );
        } else {
          console.log("Số lượng không hợp lệ hoặc vượt quá kho!");
        }
      } else {
        console.log("ID sản phẩm không tồn tại!");
      }
      break;
    case 5:
      if (cart.length === 0) {
        console.log("Giỏ hàng trống!");
      } else {
        const totalAmount = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        console.log("Tổng số tiền thanh toán:", totalAmount);
        cart = [];
        console.log("Thanh toán thành công, giỏ hàng đã được làm trống!");
      }
      break;
    case 6:
      const sortOrder = prompt("Nhập lựa chọn (1: Tăng dần, 2: Giảm dần):");
      products.sort((a, b) =>
        sortOrder == 1 ? a.price - b.price : b.price - a.price
      );
      console.table(products);
      break;
    case 7:
      const totalStockValue = products.reduce(
        (sum, p) => sum + p.price * p.quantity,
        0
      );
      console.log("Tổng giá trị tất cả điện thoại trong kho:", totalStockValue);
      break;
    case 8:
      const companyCounts = products.reduce((counts, p) => {
        counts[p.company] = (counts[p.company] || 0) + p.quantity;
        return counts;
      }, {});
      console.table(companyCounts);
      break;
    case 9:
      console.log("Thoát chương trình. Cảm ơn đã sử dụng!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
  }
}
