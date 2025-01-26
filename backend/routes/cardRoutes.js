const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController'); // Importa o controller de cartão

// Definindo as rotas de cartão
// router.get('/cards', cardController.getCards); // Listar todos os cartões
router.post('/card', cardController.createCard); // Criar um novo cartão
// router.put('/card/:id', cardController.updateCard); // Atualizar um cartão existente
// router.delete('/card/:id', cardController.deleteCard); // Excluir um cartão

module.exports = router;
