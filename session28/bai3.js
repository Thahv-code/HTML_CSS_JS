const book = {
  title: "JavaScript Basic",
  author: "John Smith",
  page: 200,
};
delete book.page;
for (let key in book) {
  console.log(`${key}:${book[key]}`);
}
