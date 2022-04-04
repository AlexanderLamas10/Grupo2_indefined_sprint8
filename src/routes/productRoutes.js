const express = require('express');
const router = express.Router();

const productsController = require("../controllers/productController");
const uploadFile = require("../middlewares/multerProductMiddleware");


router.get('/',productsController.index)
router.get('/search', productsController.search);

router.get('/carrito-de-compras', productsController.productCart);
//router.get('/categories/:id',productsController.category)

router.get('/create', productsController.create);
router.post('/create',uploadFile.single('image'), productsController.store);

router.get('/:id', productsController.detail);

router.get('/:id/edit', productsController.edit);
router.put('/:id',productsController.postEdit);


router.post('/:id', productsController.delete); 



module.exports = router;