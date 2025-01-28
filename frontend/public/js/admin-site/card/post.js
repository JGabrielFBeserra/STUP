
// Pega o ID do usuário da URL
const urlParams = new URLSearchParams(window.location.search);
const usuarioId = urlParams.get('id');  // 'id' é o parâmetro na URL

// Preenche o campo oculto com o ID do usuário
document.getElementById('usuarioId').value = usuarioId;

// Elementos do formulário e container de alertas
const cardForm = document.getElementById('cardForm');
const alertContainer = document.getElementById('alertContainer');

// Função para exibir alertas personalizados
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    alertContainer.appendChild(alertDiv);
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => {
            alertDiv.remove();
        }, 500);
    }, 5000); // O alerta desaparecerá após 5 segundos
}

// Enviar dados do formulário para o backend
cardForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Cria o objeto JSON com os valores do formulário
    const cardData = {
        saldo: parseFloat(document.getElementById('saldo').value),
        tipoCartao: parseInt(document.getElementById('tipoCartao').value),
        codigoCartao: document.getElementById('codigoCartao').value,
    };

    try {
        const response = await fetch(`http://localhost:3000/api/card?id=${usuarioId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData), // Envia o JSON
        });

        if (response.ok) {
            const result = await response.json();
            showAlert(result.mensagem, 'success');
            cardForm.reset();
        } else {
            const error = await response.json();
            showAlert(`Erro: ${error.mensagem}`, 'danger');
        }
    } catch (error) {
        showAlert("Erro ao enviar os dados para a API.", 'danger');
        console.error(error);
    }
});
