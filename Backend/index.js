const express = require("express");
require('dotenv').config();
const authRouter = require("./routes/authRoutes");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening at 3000`);
})
