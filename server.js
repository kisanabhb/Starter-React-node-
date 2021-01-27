const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const blogrouter = require("./routes/blog");
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
const optionsMongo = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
};
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
  mongoose.connect(process.env.DATABASE_LOCAL, optionsMongo, () => {
    console.log("database Local Connected");
  });
} else {
  mongoose.connect(process.env.DATABASE, optionsMongo, () => {
    console.log("database online Connected");
  });
}

app.use("/api", blogrouter);

const port = process.env.PORT;
app.listen(port || 8000, () => {
  console.log(`server is running on ${port}`);
});
