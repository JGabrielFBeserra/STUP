const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importa o controller de cartão

// Definindo as rotas de cartão
// router.get('/cards', cardController.getCards); // Listar todos os cartões
router.post('/user', userController.createUser); // Criar um novo cartão
// router.put('/card/:id', cardController.updateCard); // Atualizar um cartão existente
// router.delete('/card/:id', cardController.deleteCard); // Excluir um cartão

module.exports = router;