const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cardSchema = require('../middlewares/validationCard.ts');

exports.createCard = async (req, res) => {
    try {
      // valida requisição com Zod
      const dadosValidos = cardSchema.parse(req.body);
  
      // cria cartão no banco de dados
      const cartao = await prisma.cartao.create({
        data: {
          saldo: dadosValidos.saldo,
          tipo: dadosValidos.tipoCartao,
        },
      });
      res.status(201).json({
        mensagem: 'Cartão cadastrado com sucesso!',
        cartao: cartao,
      });
    } catch (error) {
      // Se ocorrer erro de validação ou outro erro
      if (error.errors) {
        return res.status(400).json({
          mensagem: 'Erro de validação',
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
  