import express from "express";
import cors from "cors";
import { usersTable } from "./mongodb.js";
const api = express();
api.use(express.json());
api.use(cors());

import mongodb from "mongodb";
var ObjectId = mongodb.ObjectId;

api.listen(4000, () => {
  console.log("Connected");
});
const users = [];

api.get("/users", (req, res) => {
  res.status(200, "Ok");
  res.send(users);
});
api.post("/users/SignUp", async (req, res) => {
  const user = req.body;
  // console.log(req.body, "data");

  let checkUser = users.find(({ Email }) => Email === user.Email);
  if (checkUser == undefined) {
    const newUser = await usersTable.insertOne({
      ...req.body,
    });

    console.log(
      await usersTable.findOne({
        _id: newUser.insertedId,
      }),
      "user data"
    );

    users.push(user);
    res.status(200, "OK");
    // console.log(users);
    res.json("success");
    return;
  }
  res.status(404, "already Exsits");
  res.json("already exist");
});

api.post("/users/LogIn", async (req, res) => {
  const user = req.body;

  const found = await usersTable.findOne({
    Email: user.Email,
  });

  if (found) {
    if (found.password == user.password) {
      console.log("done successfully");
    } else {
      console.log("password mismatch");
    }
  } else {
    console.log("user not found");
  }
  console.log(found, "found user");
  res.send();
});
