const express = require("express");
const router = express.Router()
const OrderController = require('../controllers/OrderController');
const { AuthUserMiddleWare, AuthMiddleWare } = require("../middleware/AuthMiddleware");


router.post('/create',AuthUserMiddleWare,OrderController.createOrder)
router.get('/get-order-details/:id',AuthUserMiddleWare,OrderController.getDetailsOrder)
router.get('/get-details-order/:id',AuthUserMiddleWare,OrderController.getDetailsOrderId)
router.delete('/cancel-order/:id',AuthUserMiddleWare, OrderController.cancelOrderDetails)
router.get('/get-all-order',AuthMiddleWare, OrderController.getAllOrder)



module.exports = router