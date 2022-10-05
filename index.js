const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const queryString = req.query;
  console.log(queryString.id);
  res.send({
    products: [
      {
        id: 1,
        name: "습식사료",
        price: 10000,
        seller: "내추럴코어",
        imageUrl: "images/products/food1.jpg",
      },
      {
        id: 2,
        name: "하네스",
        price: 50000,
        seller: "도기멍",
        imageUrl: "images/products/acc1.jpg",
      },

      {
        id: 3,
        name: "배변패드",
        price: 30000,
        seller: "흡수혁명",
        imageUrl: "images/products/house1.jpg",
      },
    ],
  });
});

app.get("/products/:id/events/:eventId", (req, res) => {
  const params = req.params;
  const { id, eventId} = params;
  res.send(`id는 ${id}와 ${eventId}입니다`);
});

app.post("/products", (req, res) => {
  const body = req.body;
  res.send({ body: body });
});

app.post("/login", (req, res) => {
  res.send("로그인해주세요");
});

app.listen(port, () => {
  console.log("망고샵의 서버가 돌아가고 있습니다.");
});
