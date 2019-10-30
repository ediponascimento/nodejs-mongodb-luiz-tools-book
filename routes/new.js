var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('new', { title: 'Cadastro de Cliente', action: "/new" });
});

router.post('/', function(req, res, next) {
  res.redirect('/?new=true');
});

module.exports = router;