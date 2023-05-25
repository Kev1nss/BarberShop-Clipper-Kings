let dados = [];
function login() {
  let login = document.getElementById("emailLogin").value;
  let senha = document.getElementById("senhaLogin").value;

  let dados = [
    {
      id: uuidv4(),
      usuario: "admin",
      email: "admin@admin.com",
      telefone: "(11) 9 999-9999",
      senha: "admin123"
    }
  ];

  for (let i = 0; i < dados.length; i++) {
    if (login === dados[i].email && senha === dados[i].senha) {
      alert("Login realizado com sucesso");
      break;
    }
  }
}

function cadastro() {
  let nomeCad = document.getElementById("nomeCadastro").value;
  let emailCad = document.getElementById("emailCadastro").value;
  let telefoneCad = document.getElementById("telefoneCadastro").value;
  let senhaCad = document.getElementById("senhaCadastro").value;

  let add = {
    id: uuidv4(),
    usuario: nomeCad,
    email: emailCad,
    telefone: telefoneCad,
    senha: senhaCad
  };
  dados.push(add);

  let n = JSON.stringify(dados);
  localStorage.setItem("bd", n);
}

function busca() {
  let login = document.getElementById("emailLogin").value;
  let senha = document.getElementById("senhaLogin").value;
  var sr = localStorage.getItem("bd");
  var bd = JSON.parse(sr);
  for (let i = 0; i < bd.length; i++) {
    if (login == bd[i].email && senha == bd[i].senha) {
      alert("Logado");
      window.location.href =
        "https://feijoadasimulator.top/br/sources/6577.jpeg";
      return; // Use 'return' para sair da função quando o login for válido
    }
  }
  alert("Usuário ou senha inválidos");
}

if (localStorage.getItem("bd")) {
  dados = JSON.parse(localStorage.getItem("bd"));
} else {
  dados = [
    {
      id: uuidv4(),
      usuario: "admin",
      email: "admin@admin.com",
      telefone: "(11) 9 999-9999",
      senha: "admin123"
    }
  ];
}
