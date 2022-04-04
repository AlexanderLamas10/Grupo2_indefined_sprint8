const express = require('express');
const userController = require("../controllers/userController");
const router = express.Router();
const uploadAvatar = require("../middlewares/multerAvatar");
const validRegister = require("../middlewares/registerMiddleware");
const validLogin=require("../middlewares/loginMiddleware")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")





router.get('/login', validLogin, guestMiddleware, userController.login);

router.post('/login', userController.loginProcess);

router.get('/logout/', userController.logout);


router.get('/profile/:id', authMiddleware, userController.profile);


router.get('/register',guestMiddleware, userController.register);

router.post('/register',uploadAvatar.single('avatar'), validRegister, userController.processRegister);


router.get('/user/:id/edit', userController.editProfile);
router.put('/user/:id',  uploadAvatar.single('avatar'),userController.processEditProfile);


module.exports = router;