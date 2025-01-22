// index.js

const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');  // Importe as rotas de usuário
const cardRoutes = require('./routes/cardRoutes');  // Importe as rotas de cartão
const app = express();
dotenv.config();

const corsOptions = {
  origin: 'http://localhost:4000',  // Permite solicitações de localhost:4000
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Especifica os métodos permitidos
  allowedHeaders: ['Content-Type'],  // Permite cabeçalhos de tipo de conteúdo
};

app.use(cors(corsOptions));
app.use(express.json());

// Usando as rotas de usuário
app.use('/api', userRoutes);
app.use('/api', cardRoutes);   // Agora o erro estará resolvido

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta: ${PORT}`);
});

module.exports = app;
