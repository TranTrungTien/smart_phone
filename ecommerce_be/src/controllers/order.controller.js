const { v4 } = require("uuid");
const orders = require("../models/order.mode");
const users = require("../models/user.model");
const products = require("../models/product.model");

const createOrder = (req, res) => {
  const {
    userId,
    carts,
    totalPrice,
    fullname,
    phone,
    email,
    address,
    province,
    district,
    ward,
  } = req.body;
  const newOrder = {
    id: v4(),
    userId,
    carts,
    totalPrice,
    fullname,
    phone,
    email,
    address,
    province,
    district,
    ward,
    created: new Date().toLocaleDateString(),
    status: "Đang chờ lấy hàng",
  };
  carts?.forEach((cart) => {
    const index = products[cart.model].findIndex(
      (product) => product.id === cart.productId
    );
    const newQuantity = {
      ...products[cart.model][index],
      quantity: products[cart.model][index].quantity - cart.quantity,
    };
    products[cart.model][index] = newQuantity;
  });
  orders.push(newOrder);
  const index = users.findIndex((item) => item.id === userId);
  users[index].carts = [];
  res.send({ message: "order created" });
};

const editOrder = (req, res) => {
  const { id, ...rest } = req.body;
  const index = orders.findIndex((order) => order.id === id);
  if (index === -1) return res.send({ message: "order not found" });
  const newOrder = {
    ...orders[index],
    ...rest,
    id: id,
  };
  orders[index] = newOrder;
  res.send({ message: "User edited" });
};

const deleteOrder = (req, res) => {
  const { id } = req.body;
  const index = orders.findIndex((order) => order.id === id);
  orders.splice(index, 1);
  res.send({ message: "order deleted" });
};

module.exports = {
  createOrder,
  deleteOrder,
  editOrder,
};
