const express = require('express');
const db = require('../config/dbconfig')
const router = express.Router();

router.get('/list',(req,res)=>{

    let sql = 'SELECT * FROM students'

    db.query(sql,(err,data,fields) => {

        if(err) throw err;

        res.json({
            status: 200,
            students : data,
            message: "Successful"
        })
    });
    
});

module.exports = router;

