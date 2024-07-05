import { app } from "./app";
import dbConnect from "./utils/db";
require("dotenv").config();

//create server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  dbConnect();
});
