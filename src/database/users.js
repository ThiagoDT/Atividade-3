const pool = require("./connection");

async function listUsers(){
    try{
        const sql = "select * From users";
            //manda o comando sql 
        const {rows} = await pool.query(sql);
        return rows;
    }catch(error){
        return error.message;
    }
    
}

async function createUser(name, email) {
    try{
        const sql = `insert into users(name,email) values ($1, $2) returning *`;
        const values = [name, email];
        const {rows} = await pool.query(sql,values);
        return rows[0];
    }catch(error){
        return error.message;
    }
    
}

async function deleteUser(id) {
    try{
        const sql = `delete from users where id_user = $1 returning *`;
        const values = [id];
        const user = await pool.query(sql,values);
        return user;
    }catch(error){
        return error.message;
    }
    
}

module.exports={
    listUsers,
    createUser,
    deleteUser
}