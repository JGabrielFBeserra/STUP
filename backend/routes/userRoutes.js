const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
const multer = require('multer'); 
const path = require('path');

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Diretório onde os arquivos serão salvos
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo
    }
  });
  
  const upload = multer({ storage: storage });

// Definindo as rotas de cartão
router.get('/users', userController.getUsers);
router.post('/user', upload.single('foto'), userController.createUser);
router.put('/user/:id', userController.updateUser); 
router.delete('/user/:id', userController.deleteUser); 

module.exports = router;