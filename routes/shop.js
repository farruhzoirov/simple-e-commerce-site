const express = require('express');
const controllers = require('../controllers/shop');
const router = express.Router();

router.get('/', controllers.getAllProducts);

router.get('/product-cart', controllers.getCart);

router.post('/cart', controllers.postCart);

router.post('/cart-delete-item', controllers.postDeleteCart);

router.post('/create-order', controllers.postOrder);

router.get('/orders', controllers.getOrders);


module.exports = router;