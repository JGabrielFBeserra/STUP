const { z } = require('zod');

const cardSchema = z.object({
  saldo: z.number()
  .int("O valor do saldo deve ser um número inteiro") 
  .min(1, { message: "Saldo: Deve ser um número maior que 0" }),  

  tipoCartao: z.number()
    .int("O tipo de cartão deve ser um número inteiro")  
    .min(1, { message: "Tipo de cartão: Deve-se escolher Comum, Estudante ou Idoso" })  
    .max(3, { message: "Tipo de cartão: Deve-se escolher Comum, Estudante ou Idoso" })  
});


module.exports = cardSchema;
