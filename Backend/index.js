const express = require("express");
const authRouter = require("./routes/authRoutes");
const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(3000, () => {
  console.log(`App is listening at 3000`);
})
