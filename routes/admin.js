const express = require('express');
const controllers = require('../controllers/products');
const router = express.Router();

router.get('/admin/add-product', controllers.getAddProduct);

router.post('/add-product', controllers.postAddProduct);

router.get('/products', controllers.getAllProduct);
//
router.post('/delete-product', controllers.deleteProduct);
//
router.get('/admin/edit-product/:prodId', controllers.getEditProducts);
//
router.post('/edit-product', controllers.postEditProduct);

module.exports = router;



