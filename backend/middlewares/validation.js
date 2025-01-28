const { z } = require('zod');

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;
  let soma = 0;
  let resto;
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf[i - 1]) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf[i - 1]) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[10])) return false;

  return true;
}

const cardSchema = z.object({
  saldo: z.number()
    .int("O valor do saldo deve ser um número inteiro")
    .min(1, { message: "Saldo: Deve ser um número maior que 0" }),

  tipoCartao: z.number()
    .int("O tipo de cartão deve ser um número inteiro")
    .min(1, { message: "Tipo de cartão: Deve-se escolher Comum, Estudante ou Idoso" })
    .max(3, { message: "Tipo de cartão: Deve-se escolher Comum, Estudante ou Idoso" }),

  codigoCartao: z.string()
    .max(20, { message: "Código do cartão: O código deve ter no máximo 20 caracteres" })
    .regex(/^[A-Za-z0-9]+$/, { message: "Código do cartão: O código deve conter apenas caracteres alfanuméricos" })
    .min(1, { message: "Código do cartão: O código é obrigatório" }),
});

const userSchema = z.object({
  nome: z.string()
    .min(3, { message: "O nome é obrigatório" })
    .max(255, { message: "O nome deve ter no máximo 255 caracteres" })
    .optional(),

  nascimento: z.preprocess(
    (val) => {
      if (typeof val === 'string') {
        return new Date(val); // Converte a string para Date
      }
      return val;
    },
    z.date().max(new Date(), { message: "A data de nascimento não pode ser no futuro" })
  ),

  cpf: z.preprocess(
    (val) => (typeof val === 'string' ? val.replace(/[^\d]/g, '') : val), 
    z.string()
      .length(11, { message: "O CPF deve conter exatamente 11 dígitos numéricos" })
      .refine(validarCPF, { message: "CPF inválido" }) 
  ),


  senha: z.string()
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
    .max(255, { message: "A senha deve ter no máximo 255 caracteres" })
    .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" })
    .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula" })
    .regex(/\d/, { message: "A senha deve conter pelo menos um número" })
    .regex(/[@$!%*?&#]/, { message: "A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &, #)" }),

});


module.exports = { cardSchema, userSchema };
