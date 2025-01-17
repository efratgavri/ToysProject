const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
const { routesInit } = require("./routes/config_routes")
require("dotenv").config();
require("./db/mongoconnect");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

routesInit(app);//123456

const server = http.createServer(app);
console.log("env", process.env.TEST, process.env.USER_DB);
let port = process.env.PORT
server.listen(port);