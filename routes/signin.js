const express = require('express');
const router = express.Router();

router.get('/sigin', function(req, res, next) {
    res.render('signin', {
        title: "Sign in",
    })
});

module.exports = router;
