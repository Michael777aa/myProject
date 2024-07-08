import mongoose from "mongoose";
import app from "./app";
mongoose.set("strictQuery", true);
mongoose
  .connect(
    "mongodb+srv://juspro:DKV1RekipMHTuTUa@macdonalds.piv2m8d.mongodb.net/?retryWrites=true&w=majority&appName=macdonalds",
    {}
  )
  .then((data) => {
    console.log("Connection successful on MongoDB");
    const PORT = process.env.PORT ?? 7777;
    app.listen(PORT, function () {
      console.info(`The server is running successfully on port ${PORT}`);
      console.info(`Project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => {
    console.log("Error on connection on MongoDB", err);
  });
