# STUP
Este repositório contém o código-fonte de um sistema de gerenciamento de transporte público, desenvolvido para otimizar o controle de ônibus, tarifas, e cadastro de passageiros. 

Demonstração das Sprints que criei para melhor estruturação e organização do projeto como um todo.

### **Sprint 1: Planejamento e Estrutura Inicial**
- **Objetivos**: 
  - Definir a arquitetura do projeto (pasta de front-end, back-end, banco de dados).
  - Configurar o ambiente de desenvolvimento (instalar dependências, ferramentas de controle de versão).
  - Criar o banco de dados e tabelas iniciais (usuários, motoristas, ônibus, linhas, cartões).
  - Estruturar a navegação do Public-Site e Administração (definir rotas e estrutura básica das páginas).

---

### **Sprint 2: Desenvolvimento do Public-Site (Frontend) - Parte 1**
- **Objetivos**: 
  - Criar a página inicial (com informações sobre os serviços e induzindo o cliente a criar o cartão).
  - Implementar páginas de cadastro de cliente e login (com validação de campos).
  - Estruturar o sistema de recarga de cartões (interface e integração com o back-end).

---

### **Sprint 3: Desenvolvimento do Public-Site (Frontend) - Parte 2**
- **Objetivos**:
  - Criar a página de consulta de linhas cadastradas (listar todas as linhas com seus horários).
  - Implementar a funcionalidade de login com autenticação (usuário pode recarregar o cartão e consultar saldo).
  - Adicionar sistema de recuperação de senha e validações no front-end.

---

### **Sprint 4: Desenvolvimento do Backend (Administração) - Parte 1**
- **Objetivos**:
  - Criar a API de autenticação e login para o administrador.
  - Criar as funcionalidades básicas para cadastrar funcionários e motoristas (CRUD).
  - Implementar a tabela de usuários e associar cada um a um funcionário.

---

### **Sprint 5: Desenvolvimento do Backend (Administração) - Parte 2**
- **Objetivos**:
  - Desenvolver funcionalidades para cadastrar ônibus, linhas e cartões (CRUD).
  - Implementar a relação entre ônibus, motoristas e linhas (criar viagens).
  - Criar o dashboard com as estatísticas básicas (quantidade de clientes, motoristas, linhas e lucros).

---

### **Sprint 6: Administração - Relatórios e Funcionalidades Avançadas**
- **Objetivos**:
  - Implementar o sistema de geração de relatórios em PDF (linhas, horários, viagens).
  - Criar gráficos e visualizações no dashboard (quantidade de clientes, motoristas, lucros).
  - Finalizar a relação entre viagens, motoristas, ônibus e passageiros (associar usuários a viagens).

---

### **Sprint 7: Desenvolvimento do BusTurnstile (Leitor de Código de Barras)**
- **Objetivos**:
  - Implementar a interface para leitura do código de barras.
  - Criar a lógica de validação do cartão (verificar saldo, tipo de cartão e tarifas).
  - Desenvolver a interação com a catraca (liberação ou bloqueio dependendo do saldo).
  - Mostrar ao usuário o tipo de cartão, valor cobrado e saldo restante.

---

### **Sprint 8: Testes e Ajustes Finais**
- **Objetivos**:
  - Testar todas as funcionalidades, corrigir bugs e validar o comportamento do sistema.
  - Refinar o layout do Public-Site e da Administração (responsividade e usabilidade).
  - Testar a integração entre front-end, back-end e BusTurnstile (código de barras e catracas).
  - Garantir que todas as funcionalidades estão funcionando conforme esperado e realizar ajustes finais.

---

### **Sprint 9: Documentação e Preparação para Deploy**
- **Objetivos**:
  - Escrever a documentação do código e instruções de uso.
  - Criar um README detalhado para o repositório com informações sobre o projeto.
  - Preparar o ambiente para deploy (configurar servidor, banco de dados, etc).
  - Realizar testes finais e garantir que o sistema está pronto para produção.

---

