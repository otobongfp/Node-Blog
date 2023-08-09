const express = require('express');
const router = express.Router();


router.get('', (req, res) => {

    const locals = {
        title : "Futures Lab",
        description : 'A simple website powered by NodeJs'
    }

    res.render('index', locals);
});

module.exports = router