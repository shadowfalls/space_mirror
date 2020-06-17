const express = require('express');

const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('./Category/Category');

// const {
// createArticle,
// } = require('./Article/Article');

const Response = require('../models/Response');

const router = express.Router();

/**
 * Article APIs
 */
router.post('/api/create_article', () => {
});

router.get('/api/get_article/:id', (req, res) => {
  if (!req.params.id) {
    res.status(404).send(new Response(true, 'ArticleId not sent', null, {}));
  }
});

router.put('/api/update_article/:id', () => {
});

router.delete('/api/delete_article/:id', () => {
});

/**
 * Categories APIs
 */
router.post('/api/create_category', async (req, res) => {
  if (!req.body.name) {
    res.status(400).send(new Response(true, 'Category name not present', null, {}));
    return;
  }
  const response = await createCategory(req.body.name);
  res.status(response.error ? 500 : 200).send(response);
});

router.get('/api/get_categories', async (req, res) => {
  const data = await getCategories();
  res.send(data);
});

router.put('/api/update_category', async (req, res) => {
  const response = await updateCategory(req.body);
  res.status(response.error ? 500 : 200).send(response);
});

router.delete('/api/delete_category/:id', async (req, res) => {
  const response = await deleteCategory(req.params.id);
  res.status(response.error ? 500 : 200).send(response);
});

/**
 *
 */

router.get('/*', (req, res) => {
  res.send({
    error: true,
    message: 'invalid route',
  });
});

module.exports = router;
