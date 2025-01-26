const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { userSchema } = require('../middlewares/validation'); // Certifique-se de que o caminho esteja correto
const multer = require('multer');

// Configuração do multer para salvar os arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Certifique-se de que a pasta 'uploads/' exista
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nome único para o arquivo
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true); // Aceitar o arquivo
    } else {
      cb(new Error('Formato de arquivo não permitido, somente JPG e PNG'), false); // Rejeitar arquivo
    }
  }
}).single('foto'); // 'foto' deve ser o nome do campo no FormData


exports.createUser = async (req, res)  => {
  try {

    
    const dadosValidos = userSchema.parse(req.body);

    const foto = req.file ? req.file.path : null;

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

    console.log(dadosValidos.cpf);

     return res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      usuario,
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

