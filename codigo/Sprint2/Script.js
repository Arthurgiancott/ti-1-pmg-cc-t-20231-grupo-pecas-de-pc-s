document.addEventListener('DOMContentLoaded', () => {
  // Obtenha as referências dos elementos
  let campoNome = document.querySelector('#campoNome');
  let labelNome = document.querySelector('#labelNome');
  let campoEmail = document.querySelector('#campoEmail');
  let formAvaliacao = document.querySelector('form');

  // Adicione um ouvinte de evento para o campo de entrada
  campoNome.addEventListener('input', () => {
    if (campoNome.value.length < 3) {
      labelNome.setAttribute('style', 'color: red');
      labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
      console.log('Campo nome inválido');
    } else {
      labelNome.setAttribute('style', 'color: black');
      labelNome.innerHTML = 'Nome';
      console.log('Campo nome válido');
    }
  });

  function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
      objDados = JSON.parse(strDados);
    } else {
      objDados = {
        contatos: [
          {
            nome: 'João da Silva',
            email: 'joao@gmail.com'
          },
          {
            nome: 'Maria das Graças',
            email: 'maria@gmail.com'
          },
          {
            nome: 'Pedro Gomes',
            email: 'pedro@gmail.com'
          }
        ]
      };
      salvaDados(objDados); // Salva os dados padrão no localStorage apenas se não houver dados existentes
    }

    return objDados;
  }

  function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
  }

  function incluirContato(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    let objDados = leDados();
    let strNome = campoNome.value;
    let strEmail = campoEmail.value;

    let objContato = {
      nome: strNome,
      email: strEmail,
      gosto: null, // Inicializa o resultado como nulo
      facilidade: null,
      amigo: null
    };

    objContato.gosto = document.querySelector('input[name="classificacao"]:checked').value; // Obtém o valor selecionado

    objContato.facilidade = document.querySelector('input[name="facilidade"]:checked').value

    objContato.amigo = document.querySelector('input[name="amigo"]:checked').value





    objDados.contatos.push(objContato);
    salvaDados(objDados);
    formAvaliacao.reset(); // Limpa o formulário

    // Exiba uma mensagem de sucesso ou execute outras ações necessárias
    alert('Avaliação enviada com sucesso!');
  }

  formAvaliacao.addEventListener('submit', incluirContato);
});













