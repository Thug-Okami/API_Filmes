const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    const query ='Select u.username, a.* from avaliacoes a inner join usuarios u on a.usuario_id = u.id';
    dbConecta.query(query, (err, results) => {
        if(err) throw(err);
        res.json(results)
    })
  });

  router.post('/', (req, res) => {
    const {filme_id, usuario_id, nota} = req.body; 
    if(nota < 1 || 5 < nota) {
        console.error('Nota precisa ser entre 1 e 5');
    };

    const query = `insert into avaliacoes(filme_id, usuario_id, nota) values (?, ?, ?);`
    dbConecta.query(query, [filme_id, usuario_id, nota], (err) => {
      if(err) throw err;
      res.status(201).json({
        mensagem: 'Avaliação publicada',
        body: req.body
      });
    });
  });

  router.delete("/:id", (req,res) => {
    const id = req.params.id;
    const query ='delete from avaliacoes where id = ?';
    dbConecta.query(query,[id], (err, results) => {
        if(err) throw(err);
        res.json(results);
    });
  });  

  module.exports = router