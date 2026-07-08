const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { handleImageUpload } = require('../middleware/upload');
const {
  getAllBlogs,
  getBlogBySlug,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogImageProxy,
} = require('../controllers/controllers');

// ─── Routes ──────────────────────────────────────────────────────────────────
router.get('/', getAllBlogs);
router.get('/slug/:slug', getBlogBySlug);   // must be BEFORE /:id
router.get('/image/*', getBlogImageProxy); // must be BEFORE /:id
router.get('/:id', getBlogById);
router.post('/', protect, handleImageUpload('erfolg/blogs'), createBlog);
router.put('/:id', protect, handleImageUpload('erfolg/blogs'), updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;
