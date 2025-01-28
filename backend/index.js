// index.js

const express = require('express');
const dotenv = require('dotenv'); 
const cors = require('cors');
const cardRoutes = require('./routes/cardRoutes');  
const userRoutes = require('./routes/userRoutes');
const app = express();
dotenv.config();
const path = require('path')

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const corsOptions = {
  origin: 'http://localhost:4000',  // Permite solicitações de localhost:4000
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Especifica os métodos permitidos
  allowedHeaders: ['Content-Type'],  
};

app.use(cors(corsOptions));
app.use(express.json());


app.use('/api', cardRoutes);  
app.use('/api', userRoutes);   

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend rodando na porta: ${PORT}`);
});

module.exports = app;
