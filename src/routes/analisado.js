const express = require("express");
const db = require('../utils/db');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const router = express.Router();


router.post('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = `DELETE FROM Alteracao WHERE ID_ALTERACAO = ${req.body.ID_ALTERACAO}`;
    console.log(sql);
    db.all(sql, [],  err => {
       if (err) {
             throw err;
       }
       res.end();
    });
 });
 

 module.exports = router;