# STUP
Este repositório contém o código-fonte de um sistema de gerenciamento de transporte público, desenvolvido para otimizar o controle de ônibus, tarifas, e cadastro de passageiros. 

Demonstração das Sprints que criei para melhor estruturação e organização do projeto como um todo.

### **Sprint 1: Planejamento, Estrutura Inicial e Desenvolvimento do Public-Site (Frontend)**  

**Objetivos**:  

- **Configuração do Ambiente de Desenvolvimento**:  
  - Configurar o repositório Git e criar um `.gitignore`.  
  - Instalar dependências básicas: `express`, `ejs`, `dotenv`, `nodemon`.  
  - Configurar o ambiente para desenvolvimento com `nodemon` para atualização automática.  

- **Estrutura do Projeto**:  
  - Criar a estrutura de pastas para Public-Site (`views` e `public`), Administração e BusTurnstile.  
  - Organizar rotas básicas para Public-Site e Administração no servidor Express.  

- **Banco de Dados**:  
  - Criar o banco de dados `stup_database` no MySQL.  
  - Configurar o Prisma e criar o schema das tabelas iniciais (usuários, cartões, motoristas, ônibus, linhas, viagens, e a tabela `usuarioviagem`).  
  - Executar `npx prisma db push` para sincronizar as tabelas no banco de dados.  

**Desenvolvimento das Páginas Estáticas do Public-Site**:  
- Criar as páginas estáticas utilizando EJS:  
  - **Index**: página inicial com informações gerais e CTA para login.  
  - **Card**: informações sobre como criar ou usar o cartão STUP.  
  - **Business**: informações sobre a empresa.  
  - **Routes**: listagem estática de rotas e horários iniciais.  
  - **App**: informações sobre como acessar o app ou outras funcionalidades online.  
  - **About**: página sobre a empresa e sua história.  
  - **Help**: página de suporte ao usuário.  

- Adicionar um layout base para todas as páginas com cabeçalho e rodapé reutilizáveis.  
- Configurar arquivos estáticos (CSS, imagens, scripts) na pasta `public`.  

**Entregas da Sprint**:  
- Ambiente de desenvolvimento configurado e repositório preparado.  
- Estrutura básica do projeto organizada com rotas e pastas.  
- Banco de dados configurado com tabelas iniciais.  
- Páginas estáticas do Public-Site criadas e navegáveis.  
- Layout base implementado para o Public-Site.  

---

### **Sprint 2: Desenvolvimento do Public-Site (Frontend) - Funcionalidades Interativas e Integração com Backend**  

**Objetivos**:  

- **Funcionalidades Interativas no Public-Site**:  
  - Implementar a funcionalidade de **login** com autenticação no frontend.  
  - Implementar a página de **consulta** de saldo e histórico do cartão, com integração backend para mostrar dados do usuário.  
  - Criar a funcionalidade para **desativação de cartão** e validações no frontend.  

- **Integração com o Backend (API)**:  
  - Criar rotas para o backend no Express para autenticação e manipulação de dados do usuário.  
  - Configurar o envio e recebimento de dados via `axios` para as interações do front-end com o backend.  

- **Finalização das Páginas e Funcionalidades Restantes**:  
  - Criar o design das páginas **consultar cartão**, **recarga de cartão** e **login** com as validações de campos no frontend.  
  - Adicionar interatividade, como modais de erro e sucesso, para uma melhor experiência do usuário.  

**Entregas da Sprint**:  
- Páginas interativas implementadas (login, consulta de cartão, desativação de cartão).  
- Backend e frontend integrados com API de autenticação e manipulação de dados do usuário.  
- Funcionalidades de login e consulta funcionando conforme esperado.

---

### **Sprint 3: Desenvolvimento do Backend (Administração) - Parte 1**  

**Objetivos**:  

- **API de Autenticação e Administração**:  
  - Criar a API para autenticação do administrador no backend (login do funcionário).  
  - Criar funcionalidades de cadastro de **funcionários**, **motoristas** e **usuários** (CRUD).  
  - Implementar validação de dados (como CPF único e validado).  

- **Funcionalidades de Cadastro de Usuário**:  
  - Implementar a parte de cadastro de usuário, onde o funcionário pode cadastrar os dados e vincular um cartão ao usuário.  
  - Garantir que o cadastro de usuário seja feito apenas via interface administrativa, e não pelo público.  

**Entregas da Sprint**:  
- API de autenticação para administradores (funcionários) implementada.  
- Funcionalidades CRUD para funcionários, motoristas e usuários criadas.

---

### **Sprint 4: Desenvolvimento do Backend (Administração) - Parte 2**  

**Objetivos**:  

- **Cadastro de Itens no Sistema**:  
  - Implementar CRUD para **ônibus**, **linhas** e **cartões**.  
  - Associar cada ônibus a uma linha e motorista.  

- **Dashboard e Relatórios Iniciais**:  
  - Criar um painel administrativo básico para visualizar o número de motoristas, funcionários, usuários, e ônibus cadastrados.  
  - Implementar a visualização de relatórios básicos.  

**Entregas da Sprint**:  
- Funcionalidades CRUD para ônibus, linhas e cartões implementadas.  
- Dashboard básico com estatísticas dos itens cadastrados (motoristas, usuários, etc).  

---

### **Sprint 5: Administração - Relatórios e Funcionalidades Avançadas**  

**Objetivos**:  

- **Relatórios Avançados**:  
  - Implementar geração de relatórios mais complexos, como relatórios de viagens, horários e utilização de cartões.  
  - Criar funcionalidades de exportação de dados (ex: exportar relatório de viagens para CSV ou PDF).  

- **Relação de Viagens e Passageiros**:  
  - Criar a relação entre **viagens** e os **usuários** que participaram das viagens.  
  - Associar motoristas, ônibus e linhas nas viagens, com os respectivos horários.  

**Entregas da Sprint**:  
- Relatórios avançados implementados.  
- Relação de viagens e passageiros configurada no backend.  

---

### **Sprint 6: Desenvolvimento do BusTurnstile (Leitor de Código de Barras)**  

**Objetivos**:  

- **Interface de Catraca**:  
  - Criar uma interface para a leitura do código de barras do cartão STUP.  
  - Implementar lógica de validação do cartão, verificando saldo e tipo de cartão.  

- **Integração com Catraca e Backend**:  
  - Desenvolver a interação com a catraca, validando o saldo do usuário e liberando ou bloqueando o acesso conforme necessário.  
  - Exibir para o usuário o tipo de cartão, valor cobrado e saldo restante.  

**Entregas da Sprint**:  
- Interface de leitura de código de barras e catraca desenvolvida.  
- Integração com o backend para verificar saldo e liberar o acesso.  

---

### **Sprint 7: Testes e Ajustes Finais**  

**Objetivos**:  

- **Testes e Correção de Bugs**:  
  - Realizar testes funcionais e de integração (backend, frontend, e BusTurnstile).  
  - Corrigir bugs encontrados e refinar o comportamento das funcionalidades.  

- **Refinamento de Design e Usabilidade**:  
  - Ajustar o layout do Public-Site e Administração para ser mais responsivo e amigável.  
  - Testar em diferentes dispositivos e corrigir problemas de usabilidade.  

**Entregas da Sprint**:  
- Sistema testado e corrigido.  
- Layout refinado e responsivo.  

---

### **Sprint 8: Documentação e Preparação para Deploy**  

**Objetivos**:  

- **Documentação do Projeto**:  
  - Escrever a documentação do código, explicando como o sistema foi estruturado.  
  - Criar um README completo com informações sobre o projeto, como rodar localmente, dependências, etc.  

- **Preparação para Deploy**:  
  - Configurar o ambiente de produção (servidor, banco de dados, etc).  
  - Realizar testes finais de deploy e garantir que o sistema funcione em produção.  

**Entregas da Sprint**:  
- Documentação completa do projeto.  
- Ambiente de produção configurado e testes finais realizados.

---

