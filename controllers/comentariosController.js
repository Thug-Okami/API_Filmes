const dbConecta = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    const query ='select u.username, f.tmdb_id, c.* from comentarios c inner join usuarios u on c.filme_id = u.id inner join filmes f on c.filme_id = f.id';
    dbConecta.query(query, (err, results) => {
        if(err) throw(err);
        res.json(results)
    })
  });

  router.post('/', (req, res) => {
    const {filme_id,usuario_id, comentario} = req.body; 
    const query = `insert into comentarios(filme_id,usuario_id, comentario) values (?, ?, ?);`
    dbConecta.query(query, [filme_id,usuario_id, comentario], (err) => {
      if(err) throw err;
      res.status(201).json({
        mensagem: 'Comentário adicionado',
        body: req.body
      });
    });
  });


  router.delete("/:id", (req,res) => {
    const id = req.params.id;
    const query ='delete from comentarios  where id = ?';
    dbConecta.query(query,[id], (err, results) => {
        if(err) throw(err);
        res.json(results);
    });
  });  

  router.put('/', (req, res) => {
    const {comentario, usuario_id, filme_id} = req.body;
    const query = 'update comentarios set comentario = ?, criado_em = CURRENT_TIMESTAMP() where usuario_id = ? and filme_id = ? ';

    dbConecta.query(query, [comentario, usuario_id, filme_id], (err) => {
      if (err) throw err;
      res.json({
        mensagem: 'Comentario atualizado com sucesso',
        body: req.body
      });
    });
  });

  module.exports = router