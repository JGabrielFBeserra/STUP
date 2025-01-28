fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
        // Supondo que você tenha um elemento de tabela com o ID "tabela-usuarios"
        const tabela = document.getElementById('tabela-usuarios');

        // Para cada usuário, cria uma linha na tabela
        data.forEach(usuario => {
            const tr = document.createElement('tr');

            let tipoDescricao;
            if (usuario.cartao.tipo === 1) tipoDescricao = 'Comum';
            else if (usuario.cartao.tipo === 2) tipoDescricao = 'Estudante';
            else if (usuario.cartao.tipo === 3) tipoDescricao = 'Idoso';
            else tipoDescricao = 'Desconhecido';

            // Adiciona os dados do usuário na linha
            tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>
          <img src="http://localhost:3000/${usuario.foto}" 
               alt="Foto de ${usuario.nome}" 
               style="width: 50px; height: 50px; object-fit: cover;" />
        </td>
        <td>${usuario.nome}</td>
        <td>${usuario.cpf}</td>
        <td>${tipoDescricao}</td>
        <td>${usuario.cartao.saldo}</td>
        <td><button>Visualizar</button> <button>Editar</button> <button class="bg-danger">Deletar</button></td>
      `;

            tabela.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar usuários:', error);
    });
