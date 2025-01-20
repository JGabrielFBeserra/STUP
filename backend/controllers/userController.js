// controllers/userController.js

// Simulação de banco de dados
let users = [
    { id: 1, name: 'João', email: 'joao@example.com' },
    { id: 2, name: 'Maria', email: 'maria@example.com' },
  ];
  
  // Função para listar todos os usuários
  exports.getUsers = (req, res) => {
    res.json(users);
  };
  
  // Função para criar um novo usuário
  exports.createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
  };
  
  // Função para atualizar um usuário existente
  exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    
    let user = users.find(u => u.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    user.name = name || user.name;
    user.email = email || user.email;
    
    res.json(user);
  };
  
  // Função para excluir um usuário
  exports.deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter(u => u.id !== parseInt(id));
    
    res.status(204).send();
  };
  