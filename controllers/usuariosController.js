const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    const query ='Select * from usuarios';
    dbConecta.query(query, (err, results) => {
        if(err) throw(err);
        res.json(results)
    })
  });

  router.get('/:username', (req,res) => {
    const username = req.params.username
    const query = 'Select * from usuarios where username = ?';
    dbConecta.query(query, [username] ,(err, results) => {
        if(err) throw err;
        res.json(results);
    })
  });

  router.get('/:username/nota', (req,res) => {
    const username = req.params.username
    const query = 'select u.username as nome, a.* from usuarios u inner join avaliacoes a on u.id = a.id where username = ?';
    dbConecta.query(query, [username] ,(err, results) => {
        if(err) throw err;
        res.json(results);
    })
  });

  module.exports = router