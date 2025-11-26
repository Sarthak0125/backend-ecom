const Product = require("../models/e-commerce/product.models");

exports.createProduct = async (req, res) => {
  try {
    const images = req.files.map((file) => file.path);
    const { name, description, price, category, stock } = req.body;
    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newProduct = await new Product({
      name,
      description,
      price,
      category,
      stock,
      images,
    });
    res.status(201).json(await newProduct.save());
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getProductsById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const images = req.files ? req.files.map((file) => file.path) : [];
    const update = { ...req.body };
    if (images.length) {
      update.images = images;
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findbyIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
