const express = require("express");
const cors = require("cors");
const {
  createImages,
  createProduct,
  editProduct,
  getImages,
  deleteProduct,
} = require("./controllers/product.controller");
const product = require("./models/product.model");
const user = require("./models/user.model");
const orders = require("./models/order.mode");
const carts = require("./models/cart.model");

const {
  createUser,
  editUser,
  deleteUser,
  getUser,
} = require("./controllers/user.controller");

const {
  createOrder,
  deleteOrder,
  editOrder,
} = require("./controllers/order.controller");
const {
  createNewCart,
  editCart,
  deleteCart,
} = require("./controllers/cart.controller");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => res.send({ message: "fine" }));
app.post("/api/upload-images", createImages);
app.post("/api/create-product", createProduct);
app.post("/api/edit-product", editProduct);
app.get("/api/images/:id", getImages);
app.post("/api/delete", deleteProduct);
app.get("/api/products", (req, res) => res.send({ products: product }));

app.post("/api/create-user", createUser);
app.post("/api/edit-user", editUser);
app.post("/api/delete-user", deleteUser);
app.post("/api/get-user", getUser);
app.get("/api/users", (req, res) => res.send({ users: user }));

app.post("/api/create-order", createOrder);
app.post("/api/edit-order", editOrder);
app.post("/api/delete-order", deleteOrder);
app.get("/api/orders", (req, res) => {
  res.send({ orders });
});

app.post("/api/create-cart", createNewCart);
app.post("/api/edit-cart", editCart);
app.post("/api/delete-cart", deleteCart);
app.get("/api/carts/:id", (req, res) => {
  const { id } = req.params;
  const carts = user.find((u) => u.id === id);
  const fullInfo = carts.carts?.map((cart) => {
    const userData = user.find((u) => u.id === cart.userId);
    const productData = product[cart.model].find(
      (u) => u.id === cart.productId
    );
    return {
      ...cart,
      user: userData,
      product: productData,
    };
  });
  res.send({ carts: fullInfo || [] });
});

app.listen(8080, () => console.log("Server is running ..."));
