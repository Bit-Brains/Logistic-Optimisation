const express = require("express");
require('dotenv').config();
const authRouter = require("./routes/authRoutes");
const addPartsRouter = require("./routes/addPartsRoutes");
const inventoryRouter = require("./routes/inventoryRoutes");
const optimizationRouter = require("./routes/optimizationRoutes");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/addItems", addPartsRouter);
app.use("/inventory", inventoryRouter);
app.use("/opti", optimizationRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening at 3000`);
})
