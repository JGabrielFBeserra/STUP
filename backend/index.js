// index.js

const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors');
const cardRoutes = require('./routes/cardRoutes');  
const userRoutes = require('./routes/userRoutes');
const app = express();
const multer = require('multer');
const path = require('path');
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Usando timestamp para garantir nome único
  },
});

const upload = multer({ storage: storage });


const corsOptions = {
  origin: 'http://localhost:4000',  // Permite solicitações de localhost:4000
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Especifica os métodos permitidos
  allowedHeaders: ['Content-Type'],  // Permite cabeçalhos de tipo de conteúdo
};

app.use(cors(corsOptions));
app.use(express.json());

// Usando as rotas de usuário
app.use('/api', cardRoutes);   // Agora o erro estará resolvido
app.use('/api', userRoutes);   // Agora o erro estará resolvido

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta: ${PORT}`);
});

module.exports = app;
