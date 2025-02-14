const urlPath = window.location.pathname; // Ex: "/admin/get/user/1"
const userId = urlPath.split('/').pop();  // Extrai "1" (o id do usuário)
console.log(userId);


fetch(`http://localhost:3000/api/user/${userId}`) // Corrigido para usar o ID real
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => {
                throw new Error(error.message || 'Erro desconhecido ao buscar o usuário');
            });
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        getTable(data);
    })
    .catch(error => {
        console.error('Erro:', error);
        alert(error.message);
    });



function getTable(usuario) {
    const form = document.getElementById('userForm');
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('voltar').addEventListener('click', function () {
            window.history.back();
        });
    });

    // Ajusta o caminho da foto para exibição correta
    const caminhoFoto = usuario.foto ? `http://localhost:3000/${usuario.foto}` : null;
    const senha = usuario.senha

    form.innerHTML = `
        <div class="row">
            <div class="col">
                <label for="foto">Foto:</label>
                <div id="preview-container">
                    <img id="fotoPreview" src="${caminhoFoto}" alt="Pré-view" readonly 
                        style="display:block; width: 100px; background-color: rgb(170, 170, 170);
                        height: 100px; object-fit: cover; margin-bottom: 5px;">
                </div>
                    <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome" 
                           value="${usuario.foto}" required readonly >
            </div>
            <div class="col">
                <div style="margin-top: 105px;">
                    <label for="nome">*Nome:</label>
                    <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome" 
                           value="${usuario.nome}" required readonly >
                </div>
            </div>
        </div>
        <br>
        <hr>
        <div class="row">
            <div class="col">
                <label for="nascimento">*Data de Nascimento:</label>
                <input type="date" id="nascimento" name="nascimento" class="form-control" 
                       value="${usuario.nascimento ? usuario.nascimento.split('T')[0] : ''}" required readonly >
            </div>
            <div class="col">
                <label for="cpf">*CPF:</label>
                <input type="text" id="cpf" name="cpf" class="form-control" placeholder="CPF" 
                       value="${usuario.cpf}" maxlength="11" pattern="\d{11}" 
                       title="Digite apenas números, 11 dígitos." required readonly >
            </div>
        </div>
        <br>
        <hr>
        <div class="row">
                                                <div class="col-11">
                                                    <!-- Campo para Senha -->
                                                    <label for="senha">*Senha:</label>
                                                    <input type="password" id="senha" name="senha" class="form-control" readonly value="${senha}"
                                                        placeholder="Senha" required>
                                                        
                                                </div>
                                                <div class="col-1">
                                                    <label for="toggleSenha">*Ver senha:</label>
                                                    <button type="button" id="toggleSenha" class="btn btn-secondary" >👁️</button>
                                                </div>
                                            </div>
                                            <hr>
        <input type="button" value="Voltar" id="voltar" class="btn btn-primary">
    `;
    document.getElementById('voltar').addEventListener('click', function () {
        window.history.back();
    });

    document.getElementById('toggleSenha').addEventListener('click', function () {
        const senhaInput = document.getElementById('senha');
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            this.textContent = "🙈"; // Ícone de olho fechado
        } else {
            senhaInput.type = "password";
            this.textContent = "👁️"; // Ícone de olho aberto
        }
    });

}