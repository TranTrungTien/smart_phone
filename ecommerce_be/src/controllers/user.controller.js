const { v4 } = require("uuid");
const users = require("../models/user.model");

const createUser = (req, res) => {
  const {
    fullname,
    email,
    phone,
    address,
    province,
    district,
    ward,
    password,
  } = req.body;
  console.log(req.body);
  const newUser = {
    id: v4(),
    fullname,
    email,
    phone,
    address,
    province,
    district,
    ward,
    password,
    status: "Đang hoạt động",
    created: new Date().toLocaleDateString(),
    carts: [],
    orders: [],
  };
  users.push(newUser);
  res.send({ message: "User created" });
};

const editUser = (req, res) => {
  const { id, ...rest } = req.body;
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return res.send({ message: "User not found" });
  const newUser = {
    ...users[index],
    ...rest,
    id: id,
  };
  users[index] = newUser;
  res.send({ message: "User edited" });
};

const deleteUser = (req, res) => {
  const { id } = req.body;
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
  res.send({ message: "User deleted" });
};

const getUser = (req, res) => {
  console.log({ users });
  const { email, password } = req.body;
  const user = users.find(
    (item) => item.email === email && item.password === password
  );
  res.send(user);
};

module.exports = {
  createUser,
  deleteUser,
  editUser,
  getUser,
};
