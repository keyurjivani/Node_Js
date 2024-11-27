const Route = require('express');
const { getProducts, getProductId, postProduct, patchProduct, deleteProduct } = require('../Controller/Products.Control');
const upload = require('../Utilis/ImageUpload');

const ProductRoute = Route();

ProductRoute.get('/',getProducts);
ProductRoute.get('/:Productid',getProductId);
ProductRoute.post('/',upload.single(), postProduct);
ProductRoute.patch('/:Productid',patchProduct);
ProductRoute.delete('/:Productid',deleteProduct);

module.exports = ProductRoute;



