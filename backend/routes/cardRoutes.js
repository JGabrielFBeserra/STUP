//userRoutes.js
const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

// Definindo as rotas de usuário
// router.get('/cards', cardController.getCards);  // Listar todos os usuários
router.post('/card', cardController.createCard);  // Criar um novo usuário
// router.put('/card/:id', cardController.updateCard);  // Atualizar usuário existente
// router.delete('/card/:id', cardController.deleteCard);  // Excluir um usuário

module.exports = router;
