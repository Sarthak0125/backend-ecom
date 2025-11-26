const express = require('express');
const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post("/", auth, adminOnly, createCategory);
router.get("/", getCategories);
router.put("/:id", auth, adminOnly, updateCategory);
router.delete("/:id", auth, adminOnly, deleteCategory);

