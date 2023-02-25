const { v4 } = require("uuid");
const multer = require("multer");
const path = require("path");
const products = require("../models/product.model");
const { createReadStream } = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images/"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + file.originalname.match(/\..*$/)[0]
    );
  },
});

const multi_upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
}).array("images", 10);

const createProduct = (req, res) => {
  const {
    title,
    model,
    priceSaleOff,
    previewImageLink,
    features,
    quantity,
    originalPrice,
    colors,
  } = req.body;
  const newProduct = {
    id: v4(),
    title,
    model,
    priceSaleOff,
    originalPrice,
    features,
    quantity,
    previewImageLink,
    colors,
    specifications: [],
    created: new Date().toDateString(),
    status: "Còn hàng",
  };
  products[model].push(newProduct);
  res.send({ message: "products created" });
};

const createImages = (req, res) => {
  multi_upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res
        .status(500)
        .send({ error: { message: `Multer uploading error: ${err.message}` } })
        .end();
      return;
    } else if (err) {
      // An unknown error occurred when uploading.
      if (err.name == "ExtensionError") {
        res
          .status(413)
          .send({ error: { message: err.message } })
          .end();
      } else {
        res
          .status(500)
          .send({
            error: { message: `unknown uploading error: ${err.message}` },
          })
          .end();
      }
      return;
    }
    res.send({
      imagesId: req.files?.map((item) => item?.filename) || [],
    });
  });
};

const getImages = (req, res) => {
  const id = req.params.id;
  const fileStream = createReadStream(
    path.join(__dirname, "..", "images/" + id)
  );
  fileStream.pipe(res);
};

const editProduct = (req, res) => {
  const {
    id,
    title,
    model,
    priceSaleOff,
    previewImageLink,
    features,
    quantity,
    originalPrice,
    colors,
  } = req.body;
  const index = products[model].findIndex((product) => product.id === id);
  if (index === -1) return res.send({ message: "product not found" });
  const newProduct = {
    ...products[model][index],
    title,
    model,
    priceSaleOff,
    originalPrice,
    features,
    quantity,
    previewImageLink,
    colors,
    status: "Còn hàng",
  };
  products[model][index] = newProduct;
  res.send({ message: "product edited" });
};

const deleteProduct = (req, res) => {
  const { id, model } = req.body;
  const index = products[model].findIndex((product) => product.id === id);
  products[model].splice(index, 1);
  res.send({ message: "product deleted" });
};

module.exports = {
  createImages,
  createProduct,
  deleteProduct,
  editProduct,
  getImages,
};
