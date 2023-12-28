const express = require('express');
const router = express.Router();

router.get('/list',(req,res)=>{
    res.json({
        message : "nice very nice"
    })
});

module.exports = router;

