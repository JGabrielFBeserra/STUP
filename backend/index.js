// index.js

const express = require('express');
const dotenv = require('dotenv'); 
const { PrismaClient } = require('@prisma/client');
const userRoutes = require('./routes/userRoutes');  // Importe as rotas de usuário
const prisma = new PrismaClient();
const app = express();
dotenv.config();

app.use(express.json());

// Usando as rotas de usuário
app.use('/api', userRoutes);  // Agora o erro estará resolvido

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta: ${PORT}`);
});

module.exports = app;
