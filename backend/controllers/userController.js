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


exports.getUser = async (req, res) => {
  try {

    
    const { id } = req.params;
 
    
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(id) },
      include: {
        cartao: true,
      },
    });

    // Verifica se o usuário foi encontrado
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    // Mensagem de erro mais informativa
    res.status(500).json({ message: 'Erro ao buscar o usuário', error: error.message });
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



exports.desactiveUser = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(id) }, 
      include: {
        cartao: true, 
      },
    });

    await prisma.cartao.update({
      where: { usuarioId: usuario.id }, 
      data: { status: false }, 
    });

    res.status(200).json({ message: 'Usuário desativado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: '', error: error.message });
  }
};

exports.activeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(id) }, 
      include: {
        cartao: true, 
      },
    });

    await prisma.cartao.update({
      where: { usuarioId: usuario.id }, 
      data: { status: true }, 
    });

    res.status(200).json({ message: 'Usuário reativado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: '', error: error.message });
  }
};


exports.editUser = async (req, res) => {
  
  try {
        const { id } = req.params;
        const foto = req.file ? req.file.path : null;

        // Valida os dados recebidos
        const dadosValidos = userSchema.parse(req.body);

        // Verifica se o usuário existe
        const usuarioExistente = await prisma.usuario.findUnique({
            where: { id: parseInt(id) },
        });

        if (!usuarioExistente) {
            return res.status(404).json({
                mensagem: 'Usuário não encontrado.',
                erro: 'Usuário não encontrado com o ID fornecido.',
            });
        }

        const usuarioAtualizado = await prisma.usuario.update({
            where: { id: parseInt(id) },
            data: {
                foto: foto || usuarioExistente.foto,
                nome: dadosValidos.nome,
                nascimento: new Date(dadosValidos.nascimento),
                cpf: dadosValidos.cpf,
                senha: dadosValidos.senha,
            },
        });

        res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!', usuario: usuarioAtualizado });
    } catch (error) {
        res.status(400).json({ mensagem: 'Erro ao atualizar usuário', erro: error.message });
    }
};
