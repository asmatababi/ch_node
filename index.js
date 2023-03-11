const http = require("http");

const index = http.createindex((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
 
  res.end("<h1>Hello Node</h1>\n");
});

index.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
