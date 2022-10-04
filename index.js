var http = require("http");
var hostname = "127.0.0.1";
var port = "8080";

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([{ name: "배변패드", price: 50000 }]);
      res.end(products);
    } else if (method === "POST") {
      res.end("🎗 POST성공");
    }
  }
  res.end("안녕히가세요");
});

server.listen(port, hostname);
console.log("mangoshop server on");
