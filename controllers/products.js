const Products = require('../models/product-mongo');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add product',
    path: "/admin/add-product",
  });
}


exports.getAllProduct = (req, res, next) => {
  Products.fetchAll().then((products) => {
    res.render('admin/products', {
      pageTitle: 'Admin products',
      path: '/products',
      prods: products
    })
  })
}

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const imageUrl = req.body.imageUrl;

  const product = new Products(title, imageUrl, price, description, null, req.user._id);
  product.save()
      .then((products) => {
        console.log(products);
        res.redirect('/');
      })


  // ---------------------------------------------
  // Sequelize codes
  // Products.create({
  //   title: title,
  //   price: price,
  //   description: description,
  //   imageUrl: imageUrl
  // })
  //     .then((result) => {
  //       console.log(result);
  //       res.redirect('/');
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.id;
  Products.deleteById(prodId)
      // Products.findByPk(prodId)
      // .then((product) => {
      //   return product.destroy();
      // })
      .then((result) => {
        console.log(result)
        res.redirect('/products');
      })
};


exports.getEditProducts = (req, res, next) => {
  // const editMode = req.query.edit;
  const prodId = req.params.prodId;
  console.log(prodId);

  Products.findById(prodId)
      .then((product) => {
        res.render('admin/edit-product', {
          pageTitle: 'Edit product',
          editing: true,
          path: '/edit/product',
          product: product
        })
      })
      .catch((err) => {
        console.log(err)
      })
}
//
//
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.id;
  console.log(prodId)
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;

  const products = new Products(updatedTitle,updatedImageUrl, updatedPrice, updatedDescription, prodId)
  products.save()
      // .then((product) => {
      //   product.title = updatedTitle;
      //   product.imageUrl = updatedImageUrl;
      //   product.price = updatedPrice;
      //   product.description = updatedDescription;
      //   return product.save();
      // })
      .then((product) => {
        console.log(product);
        res.redirect('/products')
      })
      .catch((err) => {
        console.log(err)
      })
}


