let cart = [];
let choice;
let products = [
  {
    id: 1,
    name: "mèn mén",
    price: 20000,
    quantity: 20,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 2,
    name: "mứt",
    price: 80000,
    quantity: 21,
    category: "món ăn dân tộc Kinh",
  },
  {
    id: 3,
    name: "cơm lam",
    price: 40000,
    quantity: 15,
    category: "món ăn dân tộc Mông",
  },
  {
    id: 4,
    name: "bánh đậu xanh",
    price: 60000,
    quantity: 30,
    category: "món ăn dân tộc Kinh",
  },
];
while (choice != 5) {
  console.log("1. Hiển thị các sản phẩm theo tên danh mục.");
  console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");
  console.log(
    "3. Sắp xếp các sản phẩm trong cửa hàng theo giá(a. Tăng dần, b. Giảm dần)"
  );
  console.log("4. Tính số tiền thanh toán trong giỏ hàng.");
  console.log("5. Thoát.");
  choice = +prompt("Mời nhập lựa chọn của bạn");
  switch (choice) {
    case 1:
      console.table(products);
      break;
    case 2:
      const productId = +prompt("Nhập ID sản phẩm:");
      const selectedProduct = products.find((p) => p.id === productId);
      if (selectedProduct) {
        const quantity = +prompt("Nhập số lượng:");
        if (quantity <= selectedProduct.quantity) {
          cart.push({ ...selectedProduct, quantity });
          selectedProduct.quantity -= quantity;
          console.log("Đã thêm vào giỏ hàng:", selectedProduct.name);
        } else {
          console.log("Không đủ số lượng trong kho!");
        }
      } else {
        console.log("Không tìm thấy sản phẩm!");
      }
      break;
    case 3:
      let sortChoice = prompt(
        "Nhập lựa chọn (a. Tăng dần, b. Giảm dần)"
      ).toLowerCase();
      function handleSort(direction, products) {
        products.sort((a, b) => {
          return direction === "a" ? a.price - b.price : b.price - a.price;
        });
      }
      handleSort(sortChoice, products);
      console.table(products);
      break;
    case 4:
      if (cart.length === 0) {
        console.log("Giỏ hàng trống!");
      } else {
        let totalAmount = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
        console.log("Tổng số tiền thanh toán:", totalAmount);
      }
      break;
    default:
      console.log("Vui lòng nhập lại")
      break;
  }
}
