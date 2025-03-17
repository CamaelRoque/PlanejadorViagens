import express from "express";
import cors from 'cors';
import users from "./Usuarios.js"



const app = express();

app.use(cors());

app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.status(200).json(users);
})
    
app.post('/usuarios', (req, res) => {
  const {name, age, email} = req.body;
    
  /*if (!name || !email || age === undefined) {
  return res.status(400).json({ error: "Preencha todos os campos" });
          }
    */
        const newId = users.length ? users[users.length - 1].id + 1 : 1;
    
        const newUser = { id: newId, name, email, age };
    
      users.push(newUser); // Adicionando ao array de usuários
    
      res.status(201).json(newUser); // Responde com o usuário criado
    
    
})


app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
  });
  




