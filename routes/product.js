const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post("/", authMiddleware, adminOnly, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, adminOnly, updateProduct);
router.delete("/:id", authMiddleware, adminOnly, deleteProduct);

module.exports = router;