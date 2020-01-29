var express = require('express');
var router = express.Router();
const Post = require('../post');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', csrfProtection, (req, res, next) => {
  res.render('gacha', {
    title: 'ガチャガチャ',
    user: req.user,
    csrfToken: req.csrfToken()
  });
});

router.post('/', csrfProtection, (req, res, next) => {
  let content = req.body.content;
  if (!content) {
    res.redirect('/gacha');
  }else{
    Post.create({
      username: req.body.username || 'guest',
      content: req.body.content,
      cardstyle: req.body.cardstyle || 'N'
    }).then(() => {
      res.redirect('/');
    });
  }
});

module.exports = router;
