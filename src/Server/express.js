import express from "express";
const api = express();
api.listen(4000, () => {
  console.log("Connected");
});
const users = [];
api.use(express.json());
api.get("/users", (req, res) => {
  res.status(200, "Ok");
  res.send(users);
});
api.post("/users", (req, res) => {
  const user = req.body;
  let checkUser = users.find(({ Email }) => Email === user.Email);
  if (checkUser == undefined) {
    users.push(user);
    res.status(200, "OK");
    console.log(users)
    res.json("success");
    return;
  }
  res.status(404, "already Exsits")
  res.json('already exist')
});
