const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/db.js");

const createHandler = require("./routes/createHandler.js");
const getReq = require("./routes/getHandler.js")

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", createHandler);
app.use("/api/v1", getReq);

dbConnect();

app.listen(5000, () => console.log("Server Started"));
