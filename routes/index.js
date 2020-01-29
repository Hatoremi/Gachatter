var express = require('express');
var router = express.Router();
const Post = require('../post');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', csrfProtection, (req, res, next) => {
  Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
    res.render('index', {
      title: 'ガチャッター',
      user: req.user,
      posts: posts,
      csrfToken: req.csrfToken()
      });
  });
});

router.post('/', csrfProtection, (req, res, next) => {
  Post.destroy({ where: {id : req.body.id}}).then(() => {
    res.redirect('/');
  });
});


module.exports = router;
