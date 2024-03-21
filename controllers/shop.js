const Products = require('../models/product-mongo');


exports.getAllProducts = (req, res, next) => {
  Products.fetchAll().then((products) => {
    res.render('shop/product-list', {
      pageTitle: 'All products',
      path: '/',
      products: products
    })
  }).catch((err) => {
    console.log(err)
  })
}

exports.getCart = (req, res, next) => {
  req.user.getCart().then((products) => {
    res.render('shop/cart', {
      pageTitle: 'Cart',
      path: '/cart',
      products: products
    })
  }).catch((err) => {
    console.log(err)
  })
}

exports.postCart = (req, res, next) => {
  console.log(req);
  const prodId = req.body._id;
  Products.findById(prodId)
      .then(product => {
        return req.user.addToCart(product);

      })
      .then((result) => {
        console.log(result)
        res.redirect('/product-cart');
      })
}


exports.getOrders  = (req, res, next) => {
  req.user.getOrders().then((orders) => {
    res.render('shop/orders', {
      pageTitle:'Orders',
      path:"/orders",
      orders
    })
  })
}




exports.postOrder = (req, res, next) => {
  req.user.addOrder().then((result) => {
    res.redirect('/orders');
  })
}

exports.postDeleteCart = (req, res, next) => {
  const prodId = req.body.productId;
  req.user.deleteCartById(prodId)
      .then(() => {
        res.redirect('/product-cart');
      })
      .catch((err) => {
        console.log(err)
      })
}
