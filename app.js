const express = require('express'); //importa o express
const cors = require('cors');
//const bodyParser = require('body-parser');
const app = express(); //inicializa o express
const port = 3000;
const filmesRouter = require('./routes/filmesRouter');

const corsConfig = {
  origin: 'http:://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Contet-Type']
}

//app.use(bodyParser.json());
app.use(express.json());

app.use(cors(corsConfig))

app.use('/', filmesRouter);
//configurando a porta do server

app.get('/', (req, res) => {
    res.send('Tá lá pae')
  })

  
  app.listen(port, () => {
    console.log(`Servidor rodando na porta`, port)
});
