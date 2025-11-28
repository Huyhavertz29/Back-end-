const express = require("express");
const router = express.Router()
const productController = require('../controllers/ProductController');
const { AuthMiddleWare } = require("../middleware/AuthMiddleware");


router.post('/create',productController.createProduct)
router.put('/update/:id',AuthMiddleWare,productController.updateProduct)
router.get('/get-details/:id', productController.getDetailProduct)
router.delete('/delete/:id',productController.deleteProduct)
router.get('/get-all', productController.getAllProduct)
router.post('/delete-many', AuthMiddleWare,productController.deleteMany)
router.get('/get-all-type',productController.getAllType)

module.exports = router