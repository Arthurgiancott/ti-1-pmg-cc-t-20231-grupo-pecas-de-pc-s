// Função para carregar as informações do Local Storage
function carregarInformacoes() {
  // Verificando se há algum dado salvo no Local Storage
  var informacoesSalvas = localStorage.getItem('informacoes');

  if (informacoesSalvas) {
    // Se houver dados salvos, converte a string em um array de objetos JSON
    informacoesSalvas = JSON.parse(informacoesSalvas);

    // Obtendo o último objeto salvo
    var ultimasInformacoes = informacoesSalvas[informacoesSalvas.length - 1];

    // Preenchendo os elementos HTML com as informações carregadas
    document.getElementById('Nome').innerText = ultimasInformacoes.nome;
    document.getElementById('Endereco').innerText = ultimasInformacoes.endereco;
    document.getElementById('Email').innerText = ultimasInformacoes.email;
    document.getElementById('Telefone').innerText = ultimasInformacoes.contato;
  }
}

// Função para salvar as informações no Local Storage
function salvarInformacoes() {
  // Obtendo os valores dos elementos HTML
  var nome = document.getElementById('Nome').innerText;
  var endereco = document.getElementById('Endereco').innerText;
  var email = document.getElementById('Email').innerText;
  var contato = document.getElementById('Telefone').innerText;

  // Criando um objeto com as informações
  var informacoes = {
    nome: nome,
    endereco: endereco,
    email: email,
    contato: contato
  };

  // Verificando se há algum dado salvo no Local Storage
  var informacoesSalvas = localStorage.getItem('informacoes');

  if (informacoesSalvas) {
    // Se já houver dados salvos, converte a string em um array de objetos JSON
    informacoesSalvas = JSON.parse(informacoesSalvas);
  } else {
    // Se não houver dados salvos, cria um array vazio
    informacoesSalvas = [];
  }

  // Adicionando as novas informações ao array
  informacoesSalvas.push(informacoes);

  // Salvando o array atualizado no Local Storage
  localStorage.setItem('informacoes', JSON.stringify(informacoesSalvas));

  // Exemplo de mensagem de confirmação
  alert('Informações salvas com sucesso!');

  // Chamando a função para carregar as informações atualizadas
  carregarInformacoes();

  // Restaurando o botão "Editar Perfil"
  var editarPerfilBtn = document.getElementById('editarPerfil');
  editarPerfilBtn.removeEventListener('click', salvarInformacoes);
  editarPerfilBtn.innerText = 'Editar Perfil';
  editarPerfilBtn.addEventListener('click', editarPerfil);

  // Habilitando a edição dos campos
  habilitarEdicao(false);
}

// Função para ser chamada quando o botão "Editar Perfil" for clicado
function editarPerfil() {
  // Desabilitando a edição dos campos
  habilitarEdicao(true);

  // Alterando o texto do botão para "Salvar"
  var editarPerfilBtn = document.getElementById('editarPerfil');
  editarPerfilBtn.removeEventListener('click', editarPerfil);
  editarPerfilBtn.innerText = 'Salvar';
  editarPerfilBtn.addEventListener('click', salvarInformacoes);
}

// Função para habilitar ou desabilitar a edição dos campos
function habilitarEdicao(habilitar) {
  var elementosEditaveis = document.querySelectorAll('.profile-info li');

  for (var i = 0; i < elementosEditaveis.length; i++) {
    var elemento = elementosEditaveis[i];

    if (habilitar) {
      elemento.contentEditable = true;
      elemento.classList.add('editavel');
    } else {
      elemento.contentEditable = false;
      elemento.classList.remove('editavel');
    }
  }
}

// Chamando a função para carregar as informações ao carregar a página
carregarInformacoes();