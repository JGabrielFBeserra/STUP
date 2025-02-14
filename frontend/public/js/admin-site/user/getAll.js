fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
        const tabela = document.getElementById('tabela-usuarios');

        // Para cada usuário, cria uma linha na tabela
        data.forEach(usuario => {
            const tr = document.createElement('tr');

            let tipoDescricao;
            if (usuario.cartao.tipo === 1) tipoDescricao = 'Comum';
            else if (usuario.cartao.tipo === 2) tipoDescricao = 'Estudante';
            else if (usuario.cartao.tipo === 3) tipoDescricao = 'Idoso';
            else tipoDescricao = 'Desconhecido';

            let statusCartao;
            let classStatus;
            let buttonStatus;
            let buttonClass;
            let idButton;


            if (usuario.cartao.status==1){
                statusCartao = 'Ativo';
                classStatus = "p-1 bg-success text-white rounded-2 text-center";
                buttonStatus = "Desativar";
                buttonClass = "bg-danger";
                idButton = "desactive";

            } else if (usuario.cartao.status == false) {
                statusCartao = 'Inativo';
                classStatus = "p-1 bg-danger text-white rounded-2 text-center";
                buttonStatus = "Ativar"
                buttonClass = "bg-success text-white";
                idButton = "active";
            }

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
         <td> <h6 class="${classStatus}">${statusCartao} </h6></td>
        <td><button><a class="text-decoration-none" href="/admin/get/user/${usuario.id}">Visualizar</a></button> <button><a class="text-decoration-none" href="/admin/edit/user/${usuario.id}">Editar</a></button> <button class="${buttonClass}" id="${idButton}">${buttonStatus}</button></td>
      `;

            tabela.appendChild(tr);
        });
    })
    .catch(error => {
        console.error('Erro ao carregar usuários:', error);
    });
