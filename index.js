const express = require("express");
const mongoose = require("mongoose");
const nftRouter = require("./routes/nft");

const DB = "mongodb+srv://mufaddalshakir55:mufaddalshakir55@cluster0.ydq7nvw.mongodb.net/?retryWrites=true&w=majority";
const app = express();
// middleware
app.use(express.json());
app.use(nftRouter)

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(8080, "localhost", () => {
  console.log(`connected at port ${8080}`);
});