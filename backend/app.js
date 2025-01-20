const express = require('express');
const dotenv = require('dotenv'); 
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
dotenv.config();


app.use(express.json());

app.get('/', (req, res) => res.send('Backend funcionando!'));

module.exports = app;
