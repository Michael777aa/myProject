import express from "express";
import path from "path";
import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import router from "./router";

// const MongoDBStore = ConnectMongoDB(session);

// const store = new MongoDBStore({
//   uri: "mongodb+srv://juspro:DKV1RekipMHTuTUa@macdonalds.piv2m8d.mongodb.net/?retryWrites=true&w=majority&appName=macdonalds",
//   collection: "Sessions",
// });

// entrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sessions

// app.use(
//   session({
//     secret: "This is a secret",
//     cookie: {
//       maxAge: 1000 * 3600 * 3, // 3 hours
//     },
//     store: store,
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// Views

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routers

app.use("/admin", router);

export default app;
