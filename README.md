# STUP
Este repositório contém o código-fonte de um sistema de gerenciamento de transporte público, desenvolvido para otimizar o controle de ônibus, tarifas, e cadastro de passageiros.

Demonstração das Sprints que criei para melhor estruturação e organização do projeto como um todo.

---

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

### **Sprint 2: Estruturação do Template Administrativo e Layouts Principais**

**Objetivos**:

- Escolher o template para o painel administrativo e convertê-lo para EJS.
- Estruturar os layouts principais, como:
  - **Home da Dashboard**: layout inicial com estatísticas e atalhos.
  - **Páginas de Cadastro**: criação de layouts para cadastro de funcionário, motorista, usuário, ônibus e cartão, com validação de campos utilizando Zod.
  - **Páginas de Listagem**: visualização de listas de funcionários, motoristas, usuários, ônibus e cartões.

**Entregas da Sprint**:
- Template administrativo escolhido e convertido para EJS.
- Layouts principais estruturados com validações de campos em formulários.

---

### **Sprint 2.1: Desenvolvimento do Backend e Funcionalidades CRUD**

**Objetivos**:

- Implementar o backend para os CRUDs das entidades:
  - **Funcionário, Motorista, Usuário, Ônibus e Cartão**:
    - Cadastrar, editar, listar, visualizar e excluir.
    - Implementar upload e armazenamento de fotos no banco de dados para Funcionário, Motorista e Usuário.

- Integrar os layouts administrativos com as APIs de backend para operações de CRUD.

**Entregas da Sprint**:
- Backend implementado para todas as entidades com funcionalidade completa de CRUD.
- Integração entre frontend e backend realizada.

---

### **Sprint 3: Login e Funcionalidades no Public-Site**

**Objetivos**:

- Implementar o login do usuário no Public-Site utilizando credenciais (login e senha).
- Criar as funcionalidades:
  - **Recarregar Cartão**: integração com backend para recarga de saldo.
  - **Bloqueio de Cartão**: permitir que o usuário bloqueie seu cartão por motivos de segurança.

**Entregas da Sprint**:
- Login funcional para usuários no Public-Site.
- Funcionalidades de recarga e bloqueio de cartões implementadas e integradas.

---

### **Sprint 4: Cadastro de Linhas, Turnstile e Funcionalidades no Public-Site**

**Objetivos**:

- **Cadastro de Linhas**:
  - Implementar o cadastro de linhas no sistema administrativo.
  - Gerar PDFs com horários das linhas cadastradas.

- **Interface Turnstile**:
  - Criar interface com diferentes fluxos de funcionamento:
    - Cartão com saldo suficiente.
    - Cartão sem saldo.
    - Cartão com tipo específico (ex.: estudante).
    - Erro ao validar cartão.

- **Public-Site**:
  - Puxar informações das linhas cadastradas para exibição.
  - Permitir upload e consulta dos PDFs de horários no site.

**Entregas da Sprint**:
- Cadastro de linhas funcional com geração de PDFs.
- Interface do Turnstile criada com diferentes fluxos operacionais.
- Public-Site integrado com dados de linhas e upload de PDFs.

---

### **Sprint 5: Funcionalidades do Turnstile e Relatórios**

**Objetivos**:

- Implementar a funcionalidade do Turnstile:
  - Cobrar tarifa ao validar o cartão.
  - Criar o CRUD de viagens e usuários viagem, associando usuários às viagens realizadas.

- **Relatórios**:
  - Desenvolver relatórios administrativos detalhados sobre viagens e utilização de cartões.
  - Permitir exportação de relatórios em PDF.

**Entregas da Sprint**:
- Turnstile funcional, validando cartões e cobrando tarifas.
- CRUDs de viagens e usuários viagem implementados.
- Relatórios administrativos gerados e exportáveis.

---

### **Sprint 6: Gráficos, Design e Logins Administrativos**

**Objetivos**:

- Implementar gráficos na dashboard administrativa para visualização de dados (usuários cadastrados, viagens realizadas, etc.).
- Melhorar o design geral do sistema administrativo e do Public-Site.
- Configurar logins diferenciados:
  - **Administrador Supremo**: pode cadastrar novos funcionários.
  - **Funcionários Comuns**: acesso limitado sem permissão para criar outros funcionários.

**Entregas da Sprint**:
- Gráficos na dashboard implementados.
- Design refinado para todas as interfaces.
- Logins administrativos configurados com permissões diferenciadas.

---

### **Sprint 7: Documentação e Apresentação**

**Objetivos**:

- **Documentação**:
  - Criar uma documentação completa em PDF sobre o sistema, explicando funcionalidades e arquitetura.

- **Apresentação**:
  - Gravar vídeos demonstrando todas as funcionalidades e o fluxo do sistema.

**Entregas da Sprint**:
- Documentação finalizada e entregue em PDF.
- Vídeos demonstrativos criados e apresentados.

