var express = require('express');
var router = express.Router();

router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/perfil', mainController.profile);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
