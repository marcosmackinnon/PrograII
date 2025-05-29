var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/perfil/:id', userController.profile);





module.exports = router;
