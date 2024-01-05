const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
// mongoose
//   .connect("mongodb://localhost:27017/crudPractice")
//   .then(() => console.log("connected to database"))
//   .catch((err) => console.log("database error:", err));
mongoose
  .connect(
    `mongodb+srv://mudassirmujeeb:${process.env.MONGO_CONNECTION}@cluster0.0mb3squ.mongodb.net/crudApp`
  )
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("database error:", err));
const app = express();
app.use(cors());
app.use(express.json());

// creating Schema for database
const usersSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  category: {
    type: String,
  },
  displayPrice: {
    type: Number,
  },
  purchasePrice: {
    type: Number,
  },
  sellingPrice: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const user = mongoose.model("users", usersSchema);

app.get("/", async (req, resp) => {
  let response = await user.find();
  resp.json(response);
});

app.post("/product/new", async (req, resp) => {
  const {
    productName,
    category,
    displayPrice,
    sellingPrice,
    purchasePrice,
    description,
  } = req.body;

  let newUser = new user({
    productName,
    category,
    displayPrice,
    sellingPrice,
    purchasePrice,
    description,
  });
  newUser.save();
  resp.json(newUser);
});

app.delete("/product/delete/:id", async (req, resp) => {
  const taskdeleted = await user.findByIdAndDelete(req.params.id);

  resp.json({ taskdeleted, message: "task deleted" });
});

app.get("/product/edit/:id", async (req, resp) => {
  const response = await user.findById({ _id: req.params.id });

  resp.send(response);
});
app.put("/product/edit/:id", async (req, resp) => {
  const response = await user.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  resp.send(response);
});

app.listen(8000, () => console.log("server is running on port", 8000));
