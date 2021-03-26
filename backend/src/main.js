const express = require("express");
const server = express();
var cors = require("cors");
server.use(cors());
server.use(express.json());

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("data/db.json");
const db = low(adapter);

db.defaults({ users: [] }).write();

if (process.env.NODE_ENV === "production") {
  server.use(express.static(__dirname + "/../../helloexpress/build"));
}

server.get("/aktorler", (req, res) => {
  res.json(db.get("users").value());
});

server.post("/aktorler", (req, res) => {
  db.get("users").push(req.body).write();
  res.sendStatus(201);
});

server.listen(5000, () => {
  console.log("http://localhost:5000 adresine gelen istekler dinleniyor");
});
