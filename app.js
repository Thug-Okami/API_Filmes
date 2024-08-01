const express = require('express'); //importa o express
const app = express(); //inicializa o express
const port = 3000;
const filmesRouter = require('./routes/filmesRouter');
const usuariosRouter = require('./routes/usuariosRouter');


app.use('/', filmesRouter);
app.use('/', usuariosRouter);
//configurando a porta do server

app.get('/', (req, res) => {
    res.send('Gay Abaixo')
  })

  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta`, port)
});
