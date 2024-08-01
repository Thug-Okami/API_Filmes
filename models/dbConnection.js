const mysql = require("mysql"); //importando a ferramenta que vai me conectar ao banco de dados
const name_db = "db_filmes";

const conecta = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: name_db
});

conecta.connect((err)=> {
    err 
    ? console.log(`Error ao conectar ao banco: ${err}`) 
    : console.log(`Banco ${name_db} conectado com sucesso!`);
});

module.exports = conecta;