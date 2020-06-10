var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vimophy' });
});

router.get('/p', function(req, res, next) {
  res.render('section', {
    title: 'Vimophy',
    pageTitle: 'Portfolio'
  });
});

router.get('/upload', (req, res) => {
  res.render('upload', {
    title: 'Vimophy',
    pageTitle: 'Upload'
  })
})

module.exports = router;
