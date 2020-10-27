const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const mongoose = require("./config/dbConnect");

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(cors());
const { todoRouter } = require("./app/controllers/todoController");

app.use("/", todoRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, function() {
	console.log("listening request from", port);
});
