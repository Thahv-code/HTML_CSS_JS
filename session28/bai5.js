const company = {
  name: "RikkeiSoft",

  location: "Hà Nội",

  employees: [
    { name: "Nguyễn Văn Luận", position: "Developer" },

    { name: "Nguyễn Văn Hoàng", position: "Tester" },

    { name: "Hoàng Nam Cao", position: "Manager" },
  ],
};
for (let key in company) {
  if (key === "employees") {
    for (let i in company[key]) {
      for (let j in company[key][i]) {
        console.log(`${key}${i}:${company[key][i][j]}`);
      }
    }
  } else {
    console.log(`${key}:${company[key]}`);
  }
}
