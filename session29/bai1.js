let contact = [];
let choice;
while (choice != 6) {
  console.log("1. Thêm đối tượng vào danh sách liên hệ");
  console.log("2. Hiển thị danh sách danh bạ");
  console.log("3. Tìm kiếm thông tin theo số điện thoại");
  console.log("4. Cấp nhật thông tin theo id");
  console.log("5. Xóa một đối tượng khỏi danh sách theo id");
  console.log("6. Thoát");
  choice = +prompt("Nhập lựa chọn của bạn: ");
  switch (choice) {
    case 1:
      const newContact = {
        id: +prompt("Nhập id cho liên hệ: "),
        name: prompt("Nhập tên cho liên hệ: "),
        email: prompt("Nhập email cho liên hệ: "),
        phone: prompt("Nhập số điện thoại cho liên hệ: "),
      };
      contact.push(newContact);
      console.log("Thêm thành công liên hệ mới");
      break;
    case 2:
      console.table(contact);
      break;
    case 3:
      phoneNumber = prompt("Nhập số điện thoại bạn cần tìm kiếm");
      let search = contact.filter((newContact) =>
        newContact.phone.includes(phoneNumber)
      );
      if (search.length > 0) {
        console.table(search);
      } else {
        console.log("Không tồn tại liên hệ này");
      }
      break;
    case 4:
      updateID = +prompt("Nhập ID liên hệ bạn muốn cập nhật thông tin: ");
      for (let i = 0; i < contact.length; i++) {
        if (contact[i].id == updateID) {
          let choose;
          while (choose != 4) {
            console.log("1. Name");
            console.log("2. Email");
            console.log("3. Phone");
            console.log("4. Thoát");
            choose = +prompt("Nhập lựa chọn của bạn: ");
            switch (choose) {
              case 1:
                contact[i].name = prompt("Nhập tên mới cho liên hệ: ");
                break;
              case 2:
                contact[i].email = prompt("Nhập email mới cho liên hệ: ");
                break;
              case 3:
                contact[i].phone = prompt(
                  "Nhập số điện thoại mới cho liên hệ: "
                );
                break;
              default:
                console.log("Lựa chọn không hợp lệ");
            }
            console.log("Cập nhật thành công");

            break;
          }
        } else {
          console.log("ID không tồn tại");
        }
      }
      break;
    case 5:
      let deleteID = +prompt("Nhập ID liên hệ bạn muốn xóa: ");
      for (let i = 0; i < contact.length; i++) {
        if (contact[i].id == deleteID) {
          contact.splice(i, 1);
          console.log("Xóa thành công");
        } else {
          console.log("ID không tồn tại");
        }
      }
      break;
    case 6:
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
}
