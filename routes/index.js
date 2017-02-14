var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio Website' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'about' });
});

router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
});

router.get('/skills', function(req, res, next) {
    res.render('skills', { title: 'Skills' });
});

module.exports = router;
