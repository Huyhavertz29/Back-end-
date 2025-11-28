const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController')
const { AuthMiddleWare,AuthUserMiddleWare } = require('../middleware/AuthMiddleware')

router.post('/sign-up',userController.createUser)
router.post('/sign-in', userController.loginUser)
router.post('/log-out', userController.logoutUser)
router.put('/update-user/:id', AuthUserMiddleWare,userController.updateUser)
router.delete('/delete-user/:id',AuthMiddleWare,userController.deleteUser)
router.get('/getAll',AuthMiddleWare,userController.getAllUser)
router.get('/get-details/:id',AuthUserMiddleWare, userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)
router.post('/delete-many',AuthMiddleWare, userController.deleteMany )

module.exports = router