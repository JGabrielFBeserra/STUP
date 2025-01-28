const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { cardSchema } = require('../middlewares/validation.js');

// Controller de Cartão
exports.createCard = async (req, res) => {
  try {
    const dadosValidos = cardSchema.parse({
      saldo: Number(req.body.saldo),
      tipoCartao: Number(req.body.tipoCartao),
      codigoCartao: req.body.codigoCartao,
  });
  console.log("dados validos: " + JSON.stringify(dadosValidos));
    
    // Verifique se o id do usuário foi passado na URL
    const usuarioId = parseInt(req.query.id);
    console.log("usuario Id: "+usuarioId);
    
    if (!usuarioId) {
      return res.status(400).json({
        mensagem: 'Erro: O id do usuário é obrigatório.',
        erro: 'Por favor, informe o id do usuário.',
      });
    }

    // Verifique se o usuário existe no banco de dados
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId },
    });

    console.log("usuario : " + JSON.stringify(usuario));

    console.log(usuario.id);
    

    if (!usuario) {
      return res.status(404).json({
        mensagem: 'Erro: Usuário não encontrado.',
        erro: 'Não foi encontrado um usuário com esse id.',
      });
    }

    // Verifique se já existe um cartão com o código informado
    const cartaoExistente = await prisma.cartao.findUnique({
      where: { codigoCartao: dadosValidos.codigoCartao },
    });

    if (cartaoExistente) {
      return res.status(400).json({
        mensagem: 'Erro: Código do cartão já existe.',
        erro: 'Já existe um cartão com esse código. Por favor, escolha outro.',
      });
    }

    console.log("Preparando para criar o cartão...");

const cartao = await prisma.cartao.create({
  data: {
    saldo: dadosValidos.saldo,
    tipo: dadosValidos.tipoCartao,
    codigoCartao: dadosValidos.codigoCartao,
    usuarioId: usuario.id,
  },
});

console.log("Cartão criado:", cartao);


    return res.status(201).json({
      mensagem: 'Cartão criado com sucesso!',
      cartao,
    });
    
  } catch (error) {
    console.error("Erro interno:", error);
    if (error.errors) {
      console.log("Erro na validação dos dados: ", error.errors);
      return res.status(400).json({
        mensagem: error.errors.map(e => e.message).join(', '),
        erros: error.errors,
      });
    } else {
      return res.status(500).json({
        mensagem: 'Erro interno no servidor',
        erro: error.message,
        stack: error.stack, // Exibe o stack trace para ajudar na depuração
      });
    }
  }
  
};