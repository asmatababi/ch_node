const fs = require("fs");


fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File created successfully!");
});

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});