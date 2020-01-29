var express = require('express');
var router = express.Router();
const Post = require('../post');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const moment = require('moment-timezone');

/* GET home page. */
router.get('/', csrfProtection, (req, res, next) => {
  Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
    posts.forEach((post) => {
      post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY/MM/DD HH:mm:ss');
    });
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
