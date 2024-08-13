const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    const query ='Select * from usuarios';
    dbConecta.query(query, (err, results) => {
        if(err) throw err;
        res.json(results)
    })
  });

  router.get('/username/:username', (req,res) => {
    const username = req.params.username
    const query = 'Select * from usuarios where username = ?';
    dbConecta.query(query, [username] ,(err, results) => {
        if(err) throw err;
        res.json(results);
    })
  });

  router.get('/email/:email', (req,res) => {
    const email = req.params.email;
    const query = 'Select * from usuarios where email = ?';
    dbConecta.query(query, [email], (err,results) => {
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

  router.post('/', (req, res) => {
    const {username, email, senha} = req.body; 
    const query = `insert into usuarios(username,email, senha) values (?, ?, md5(?));`
    dbConecta.query(query, [username, email, senha], (err) => {
      if(err) throw err;
      res.status(201).json({
        mensagem: 'Usuario criado!',
        body: req.body
      });
    });
  });

  router.delete("/usuarioid/:id", (req,res) => {
    const id = req.params.id;
    const query ='delete from usuarios where id = ?';
    dbConecta.query(query,[id], (err, results) => {
        if(err) throw(err);
        res.json(results);
    });
  });  

  router.delete("/:username", (req,res) => {
    const username = req.params.username;
    const query ='delete from usuarios where username = ?';
    dbConecta.query(query,[username], (err, results) => {
        if(err) throw(err);
        res.json(results);
    });
  });  

  module.exports = router