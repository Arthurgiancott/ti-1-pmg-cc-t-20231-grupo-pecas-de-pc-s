var bancoDeDadosCadastro = [
    { id: 'pessoa1', nome: 'pedro', email: 'pedroph18@icloud.com', telefone: '+55(031)9 9999-9999', senha: 'minimo8l' },
];
var opcoes = {
    includeScore: true,
    keys: ['nome']
};
var fuse = new Fuse(bancoDeDados, opcoes);

// Verifica se já existe algum dado salvo no LocalStorage
var divUsers = JSON.parse(localStorage.getItem("users")) || [];

function addUser()
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let phone = document.getElementById("phone").value;

// Salva o array "users" no LocalStorage
localStorage.setItem("users", JSON.stringify(users));

// Limpa o formulário e atualiza a tabela
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
document.getElementById("phone").value = "";
document.getElementById("userTable").value = "";

let user = { name: name, email: email, password: password, phone: phone };
users.push(user);

// Salva o array "users" no LocalStorage
localStorage.setItem("users", JSON.stringify(users));

// Limpa o formulário e atualiza a tabela
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("password").value = "";
document.getElementById("phone").value = "";
document.getElementById("userTable").innerHTML += "<tr><td>" + name + "</td><td>" + email + "</td><td>" + password + "</td><td>" + phone + "</td></tr>";


// Popula a tabela com os usuários cadastrados no LocalStorage
for (let i = 0; i < users.length; i++) {
    document.getElementById("userTable").innerHTML += "<tr><td>" + users[i].name + "</td><td>" + users[i].email + "</td><td>" + users[i].password + "</td><td>" + users[i].phone + "</td></tr>";
}

    
