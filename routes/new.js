var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('new', { title: 'Cadastro de Cliente', action: '/new', doc:{}});
});


router.post('/', function (req, res, next) {
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  global.db.insertCustomer({nome, idade, uf }, (err, result) => {
    if (err) { return console.log(err) }
    res.redirect('/?new=true');
  });
});

module.exports = router;