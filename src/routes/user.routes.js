const express = require("express");

const {listUsers, createUser, deleteUser} = require("../database/users");

//cria rotas
const router = express.Router();


//curl -X GET http://localhost:5003/users
router.get("/", async function(req, res){
    const users = await listUsers();
    return res.status(200).send(users);
});

//curl -X POST http://localhost:5003/users -H "Content-Type: application/json" -d "{\"name\":\"thiago\",\"email\":\"thiago@teste.com\"}"
router.post("/", async function(req, res){
    const {name,email}= req.body;
    const user = await createUser(name, email);
    return res.status(201).send(user);
});

//http://localhost:5003/users/3
//curl -X DELETE http://localhost:5003/users/3
router.delete("/:id", async function(req, res){
    const id= req.params.id;
    const response = await deleteUser(id);
    if(response.rowCount!=0){
        return res.status(200).send(response.rows[0]);
    }else{
        return res.status(404).send({message:"Usuario não encotrado"});
    }
});

module.exports = router;