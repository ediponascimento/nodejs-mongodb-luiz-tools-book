var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  global.db.findAll((err, docs) => {
    if (err) { return console.log(err); }
    res.render('index', {docs});
  });
});

router.get('/edit/:id', (req, res, next) => {
  var id = req.params.id;
  global.db.findOne(id, (err, doc) => {
    if (err) { return console.log(err)}
    res.render('new', {title: 'Edição de Cliente', doc:doc, action:'/edit/' + doc._id}) 
  });
});

router.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf;
  global.db.updateCliente(id, {'$set': {nome, idade, uf}}, (err, result) => {
    if ( err) { return console.log(err); }
    res.redirect('?/edit=true');
  });
});

router.get('/delete/:id', (req, res) => {
  var id = req.params.id;
  global.db.deleteCliente(id, (err, result) => {
    if (err) { return console.log(err) };
    res.redirect('/?delete=true');
  });
});


module.exports = router;
