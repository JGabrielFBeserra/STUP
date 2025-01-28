const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { userSchema } = require('../middlewares/validation'); // Certifique-se de que o caminho esteja correto

exports.createUser = async (req, res)  => {
  try {

    const foto = req.file ? req.file.path : null;
    
    const dadosValidos = userSchema.parse(req.body);

    const usuarioExistente = await prisma.usuario.findUnique({
      where: { cpf: dadosValidos.cpf },
    });

    if (usuarioExistente) {
      console.log("CPF já está cadastrado:", usuarioExistente);
      return res.status(400).json({
        mensagem: 'CPF: Esta CPF já está cadastrado. Por favor, insira um CPF válido não cadastrado.',
        erro: 'CPF: Esta CPF já está cadastrado. Por favor, insira um CPF válido não cadastrado.',
      });
    }

    console.log(dadosValidos.cpf);
    const usuario = await prisma.usuario.create({
      data: {
        foto: foto,
        nome: dadosValidos.nome,
        nascimento: new Date(dadosValidos.nascimento), 
        cpf: dadosValidos.cpf,
        senha: dadosValidos.senha,
      },
    });
 
    

     return res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      usuarioId: usuario.id,
    });
    
  } catch (error) {
    if (error.errors) {
      return res.status(400).json({
        mensagem: error.errors.map(e => e.message).join(', '),
        erros: error.errors,
      });
    } else {
      return res.status(500).json({
        mensagem: 'Erro interno no servidor',
        erro: error.message,
      });
    }
  }
};


exports.getUsers = async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: {
        cartao: true, // incluir os cartao (ex: usuario.cartao.saldo === pra que isso exista)
      },
    });
    

    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({
      mensagem: 'Erro interno no servidor',
      erro: error.message,
    });
  }
};



exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;  
    const usuario = await prisma.usuario.delete({
      where: { id: parseInt(id) } 
    });
    res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;  // O ID do usuário vem da URL
    const foto = req.file ? req.file.path : null;  // Foto pode ser opcional no update

    // Valida os dados recebidos
    const dadosValidos = userSchema.parse(req.body);

    // Verifica se o usuário existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { id: parseInt(id) },  // Usa o id da URL para buscar o usuário
    });

    if (!usuarioExistente) {
      return res.status(404).json({
        mensagem: 'Usuário não encontrado.',
        erro: 'Usuário não encontrado com o ID fornecido.',
      });
    }

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: parseInt(id) },  // ID do usuário para fazer a atualização
      data: {
        foto: foto || usuarioExistente.foto,  // Mantém a foto anterior se não for enviada uma nova
        nome: dadosValidos.nome || usuarioExistente.nome,
        nascimento: new Date(dadosValidos.nascimento) || usuarioExistente.nascimento,
        cpf: dadosValidos.cpf || usuarioExistente.cpf,  // Se o CPF não for alterado, mantemos o atual
        senha: dadosValidos.senha || usuarioExistente.senha,  // Se a senha não for alterada, mantemos a atual
      },
    });

    return res.status(200).json({
      mensagem: 'Usuário atualizado com sucesso!',
      usuario: usuarioAtualizado,
    });

  } catch (error) {
    if (error.errors) {
      return res.status(400).json({
        mensagem: error.errors.map(e => e.message).join(', '),
        erros: error.errors,
      });
    } else {
      return res.status(500).json({
        mensagem: 'Erro interno no servidor',
        erro: error.message,
      });
    }
  }
};
