const { v4 } = require("uuid");
const carts = require("../models/cart.model");
const users = require("../models/user.model");

const createNewCart = (req, res) => {
  const { userId, productId, quantity, totalPrice, model, price, color } =
    req.body;
  const newCart = {
    id: v4(),
    userId,
    model,
    price,
    productId,
    quantity,
    color,
    totalPrice,
  };
  const index = users.findIndex((item) => item.id === userId);
  users[index].carts.push(newCart);
  res.send({ message: "cart created" });
};

const editCart = (req, res) => {
  const { id, userId, productId, quantity, totalPrice, model, price, color } =
    req.body;
  const newOrder = {
    id: id,
    price,
    model,
    userId,
    productId,
    quantity,
    color,
    totalPrice,
  };
  const index = users.findIndex((item) => item.id === userId);
  const idx = users[index].carts.findIndex((item) => item.id === id);
  users[index].carts[idx] = newOrder;
  res.send({ message: "carts edited" });
};

const deleteCart = (req, res) => {
  const { userId, cartId } = req.body;
  const index = users.findIndex((item) => item.id === userId);
  const idx = users[index].carts.findIndex((item) => item.id === cartId);
  users[index].carts.splice(idx, 1);
  res.send({ message: "cart deleted" });
};

module.exports = {
  createNewCart,
  editCart,
  deleteCart,
};
