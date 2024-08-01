const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    const query ='Select * from filmes';
    dbConecta.query(query, (err, results) => {
        if(err) throw(err);
        res.json(results)
    })
  });

  router.get('/:id', (req,res) => {
    const id = req.params.id
    const query = 'Select * from filmes where id = ?';
    dbConecta.query(query, [id] ,(err, results) => {
        if(err) throw err;
        res.json(results);
    })
  });

  module.exports = router