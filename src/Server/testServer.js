import express from "express";
import cors from "cors";
// import "./db.js";
// import { booksTable, productsTable } from "./db.js";
import "./mongodb.js";
import { foodTable } from "./mongodb.js";

import mongodb from "mongodb";
var ObjectId = mongodb.ObjectId;

const server = express();
server.use(express.json());
server.use(cors());

server.listen(1000, () => {
  console.log("listening to port 1000");
});

server.get("/", async (req, res) => {
  res.json({ message: "Welcome" });
});

// ------- create food item menu ------- //

server.post("/foodMenu", async (req, res) => {
  const foodDetail = req.body;
  await foodTable.insertOne(foodDetail);

  // if want to create more than one use insertMany()

  res.json({ message: "food item created successfully", data: foodDetail });
});

// ------- update food item by id ------- //

server.put("/foodUpdate", (req, res) => {
  const id = req.query.id;
  const foodItem = foodTable.updateOne(
    {
      _id: new ObjectId(id),
    },

    { $set: { name: "Pizza" } }
  );

  res.json({ code: 200, status: "OK", message: "item updated successfully" });
});

// ------- delete food item by id ------- //

server.delete("/foodDelete", async (req, res) => {
  const id = req.query.id;
  await foodTable.deleteOne({
    _id: new ObjectId(id),
  });
  res.json({ code: 200, status: "OK", message: "item deleted successfully" });
});

// ------- get all food menu ------- //

server.get("/foodMenu", (req, res) => {
  const foodList = foodTable.find();

  res.json({ code: 200, status: "OK", data: foodList });
});

// ------- get food Item by id ------- //

server.get("/foodItem/:id", async (req, res) => {
  const id = req.params.id;
  const foodItem = await foodTable.findOne({
    _id: new ObjectId(id),
  });

  res.json({ code: 200, status: "OK", data: foodItem });
});

// ------- get food Item by id query params ------- //

server.get("/foodItem", async (req, res) => {
  const id = req.query.id;
  const foodItem = await foodTable.findOne({
    _id: new ObjectId(id),
  });

  res.json({ code: 200, status: "OK", data: foodItem });
});

// ------- create new book ------- //
// {
//     "title": "Hello From The Other Side",
//     "author": "folan",
//     "pages": 230,
//     "language": [
//         "en",
//         "ar",
//         "gr"
//     ],
//     "description": " Aliquip occaecat velit fugiat nostrud id sit quis ullamco et exercitation. Lorem magna eu cupidatat nostrud aliquip excepteur. Elit magna qui fugiat elit est ipsum excepteur minim ullamco ut."
// }

server.post("/book", async (req, res) => {
  console.log(req.body, "data");
  const book = new booksTable({
    ...req.body,
  });
  console.log(book.id);
  await book.save().then(() => {
    res.json({
      message: "book saved successfully",
      data: book,
    });
  });
});

// ------- create new product ------- //
// {
//     "name": "product",
//     "description": "Non labore consectetur esse excepteur quis deserunt culpa aliquip occaecat nulla. Sunt sit est laboris ullamco laborum deserunt amet. Ad dolor fugiat amet ut in dolor duis ullamco eiusmod ex deserunt esse.",
//     "price": 200,
//     "rate": 4.3,
//     "country": "Greman",
//     "reviews": [
//         "awesome",
//         "not bad",
//         "very good"
//     ]
// }

server.post("/product", async (req, res) => {
  console.log(req.body, "data");
  const product = new productsTable({
    ...req.body,
  });
  await product.save().then(() => {
    res.json({
      message: "product saved successfully",
      data: product,
    });
  });
});
