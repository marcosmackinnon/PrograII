var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.post('/register', userController.registerCreate);
router.post('/login', userController.loginProcesar);
router.post('/logout', userController.loginDestroy);





module.exports = router;
