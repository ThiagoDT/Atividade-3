const pool = require("./connection");

async function listUsers(){
    const sql = "select * From usuario";
    //manda o comando sql 
   const {rows} = await pool.query(sql);
   return rows;
}

async function createUser(name, email) {
    const sql = `insert into users(name,email) values ($1, $2) returning *`;
    const values = [name, email];
    const {rows} = await pool.query(sql,values);
    return rows[0];
}

async function deleteUser(id) {
    const sql = `delete from users where id_user = $1 returning *`;
    const values = [id];
    const user = await pool.query(sql,values);
    return user;
}

module.exports={
    listUsers,
    createUser,
    deleteUser
}