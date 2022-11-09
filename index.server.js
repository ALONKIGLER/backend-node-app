const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const { connect } = require("mongoose");
const session = require("express-session");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const cartRoutes = require("./routes/cart");
const path = require("path");
const cors = require("cors");
const initialData = require("./routes/admin/initialData");
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const adminOrderRoute = require("./routes/admin/order.routes");

env.config();

app.use(
  session({
    secret: "hello world",
  })
); // req.session

connect("mongodb+srv://Aloni:1234@cluster0.xfwelvs.mongodb.net/BLAGAN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    console.log("we are now connected to the db");
  },
  (err) => {
    console.log(`we failed to connect to the db: ${err.message}`);
  }
);

app.use(express.urlencoded({ extended: false }));

app.post("/api/api", function (req, res) {
  res.status(400).json({
    message: "Invalid Password",
  });
});

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", userRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", initialData);
app.use("/api", addressRoutes);
app.use("/api", orderRoutes);
app.use("/api", adminOrderRoute);

// mongodb+srv://<username>:<password>@cluster0.xfwelvs.mongodb.net/?retryWrites=true&w=majority

app.listen(2000, () => {
  // console.log(`server is running in port ${process.env.PORT}`);
});
