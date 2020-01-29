var express = require('express');
var router = express.Router();
const Post = require('../post');

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
    res.render('index', {
      title: 'ガチャッター',
      user: req.user,
      posts: posts
      });
  });
});

router.post('/', (req, res, next) => {
  Post.destroy({ where: {id : req.body.id}}).then(() => {
    res.redirect('/');
  });
});


module.exports = router;
