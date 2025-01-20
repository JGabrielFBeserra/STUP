//userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definindo as rotas de usuário
router.get('/users', userController.getUsers);  // Listar todos os usuários
router.post('/users', userController.createUser);  // Criar um novo usuário
router.put('/users/:id', userController.updateUser);  // Atualizar usuário existente
router.delete('/users/:id', userController.deleteUser);  // Excluir um usuário

module.exports = router;
