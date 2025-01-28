//post
document.getElementById('foto').addEventListener('change', function (event) {
    const file = event.target.files[0];  // Captura o primeiro arquivo selecionado
    const preview = document.getElementById('fotoPreview');

    if (file) {
        // Cria um objeto URL para a imagem selecionada
        const reader = new FileReader();

        reader.onload = function (e) {
            // Atualiza o src da imagem de pré-visualização
            preview.src = e.target.result;
            preview.style.display = 'block';  // Exibe a imagem
        }

        reader.readAsDataURL(file);  // Lê o arquivo como uma URL de dados
    }
});

// elementos formulário
const userForm = document.getElementById('userForm');
const alertContainer = document.getElementById('alertContainer');

// exibir alertas de sucesso ou erro
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
    }, 5000);
}

userForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(userForm);

    try {
        const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {

            const result = await response.json();
            showAlert(result.mensagem, 'success');
            const fotoPreview = document.getElementById('fotoPreview');
            if (fotoPreview) {
                fotoPreview.src = '';  // Limpa o src da imagem
            }
            userForm.reset();
            window.location.href = `/admin/create/card?id=${result.usuarioId}`;



        } else {
            const error = await response.json();
            showAlert(`Erro: ${error.mensagem}`, 'danger'); // Alerta de erro
        }
    } catch (error) {
        showAlert("Erro ao enviar os dados para a API.", 'danger');
        console.error(error);
    }
});


