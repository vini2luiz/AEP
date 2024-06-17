import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3003;

// Usar um array para armazenar dados em memória temporariamente
const users = [];

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  // Simula a inserção no banco de dados
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);

  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
