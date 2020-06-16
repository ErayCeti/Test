const express = require('express');
const router = express.Router();

router.get('/home', (req, res, next) => {
    res.status(200).json({
        Name:'Eray',
        SurName:'Sofi:D'
    })
});
module.exports = router;
