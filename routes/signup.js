const express = require('express');
const router = express.Router();

router.get('/sigup', function(req, res, next) {
    res.render('signup', {
        title: "Sign up",
    })
});

module.exports = router;
