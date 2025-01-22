const { z } = require('zod');

const cardSchema = z.object({
  saldo: z.number()
  .int("O valor do saldo deve ser um número inteiro")  // Garante que o saldo seja um número inteiro
  .min(1, { message: "Saldo: Deve ser um número maior que 0" })  // Garante que o saldo seja maior que 0
  .refine(val => val !== null, { message: "Saldo: Não pode ser nulo" }),  // Garantir que o saldo não seja nulo

  tipoCartao: z.number()
    .int("O tipo de cartão deve ser um número inteiro")  
    .min(1, { message: "O tipo de cartão não pode ser menor que 1" })  
    .max(3, { message: "O tipo de cartão deve ser Comum, Estudante ou Idoso" })  
});


module.exports = cardSchema;
