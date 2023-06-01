const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require("body-parser");
const cors = require("cors");

const nftRouter = require("./routes/nft");
const roomRouter = require("./routes/room");


const DB = "mongodb+srv://mufaddalshakir55:mufaddalshakir55@cluster0.ydq7nvw.mongodb.net/?retryWrites=true&w=majority";
const app = express();
// middleware
// app.use(express.json());
app.use(bodyParser.json());
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions));


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

app.use(nftRouter)
app.use(roomRouter)
