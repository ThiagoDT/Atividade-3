 const path = require("path");
 const dotenv = require("dotenv");
 dotenv.config({
    quiet:true,
    path:path.resolve(__dirname,"..","..",".env")
});

const{Pool} = require("pg");

//configuração com o banco  de dados
const connection = {
    host:process.env.POSTGRES_HOST,
    user:process.env.POSTGRES_USER,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DATABASE,
    port:process.env.POSTGRES_PORT

};
//gerencia a conexão com o banco de dados
const pool = new Pool(connection);

//exporta a variavel pool
module.exports=pool;