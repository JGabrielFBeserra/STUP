const express = require('express');
const dotenv = require('dotenv'); 
const { PrismaClient } = require('@prisma/client');


dotenv.config();

const prisma = new PrismaClient();
const app = express();


app.use(express.json());

app.get('/', (req, res) => res.send('Backend funcionando!'));

module.exports = app;
