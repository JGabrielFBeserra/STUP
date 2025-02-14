// Adiciona um evento de clique no botão "Deletar"
document.addEventListener('DOMContentLoaded', () => {
    const tabela = document.getElementById('tabela-usuarios');
    
    tabela.addEventListener('click', async (event) => {
      // Verifica se o clique foi em um botão "Deletar"
      if (event.target && event.target.id === 'desactive') {
        const usuarioId = event.target.closest('tr').querySelector('td:first-child').innerText;  // Pega o ID do usuário da tabela
        const confirmDelete = confirm('Tem certeza que deseja desativar este usuário?');
  
        if (confirmDelete) {
          try {
            const response = await fetch(`http://localhost:3000/api/user/putA/${usuarioId}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            
            if (response.ok) {
              alert('Usuário desativado com sucesso');
              location.reload();
              
            } else {              
              const errorData = await response.json();
              alert(`Erro ao desativar usuário: ${errorData.message}`);
            }
          } catch (error) {
            console.error('Erro ao desativar usuário:', error);
            alert('Erro ao tentar desativar o usuário');
          }
        }
      }
    });
  });
  