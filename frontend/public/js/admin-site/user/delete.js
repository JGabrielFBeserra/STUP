// Adiciona um evento de clique no botão "Deletar"
document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('tabela-usuarios');
    
    tabela.addEventListener('click', async (event) => {
      // Verifica se o clique foi em um botão "Deletar"
      if (event.target && event.target.classList.contains('bg-danger')) {
        const usuarioId = event.target.closest('tr').querySelector('td:first-child').innerText;  // Pega o ID do usuário da tabela
        const confirmDelete = confirm('Tem certeza que deseja deletar este usuário?');
  
        if (confirmDelete) {
          try {
            fetch(`http://localhost:3000/api/users/${usuarioId}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
  
            if (response.ok) {
              alert('Usuário deletado com sucesso');
              // Remover a linha da tabela
              const linha = event.target.closest('tr');
              linha.remove();
            } else {
              const errorData = await response.json();
              alert(`Erro ao deletar usuário: ${errorData.message}`);
            }
          } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            alert('Erro ao tentar deletar o usuário');
          }
        }
      }
    });
  });
  