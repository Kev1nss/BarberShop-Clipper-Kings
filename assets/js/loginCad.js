function validateField() {
  const emailValid = isEmailvalid();
  const passwordValid = isValidPassword();
  document.getElementById("entratBtn").disabled = !emailValid || !passwordValid;
}
function isEmailvalid() {
  const email = document.getElementById("emailLogin").value;
  if (!email) {
    return false;
  }
  return validaEmail(email);
}

function isValidPassword() {
  const password = document.getElementById("senhaLogin").value;
  if (!password) {
    return false;
  }
  return true;
}
function validaEmail(email) {
  return /\S+@\S+\S+/.test(email);
}

function login() {
  let login = document.getElementById("emailLogin").value;
  let senha = document.getElementById("senhaLogin").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(login, senha)
    .then((response) => {
      window.location.href = "produtos.html";
    })
    .catch((error) => {
      alert(getErrorMessage(error));
    });
}
function getErrorMessage(error) {
  if (error.code == "auth/invalid-email") {
    return "Usuario não encontrado";
  } else if (error.code == "auth/wrong-password") {
    return "Usuario não encontrado";
  }
  return error.message;
}

function cadastro() {
  let nomeCad = document.getElementById("nomeCadastro").value;
  let emailCad = document.getElementById("emailCadastro").value;
  let telefoneCad = document.getElementById("telefoneCadastro").value;
  let senhaCad = document.getElementById("senhaCadastro").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(emailCad, senhaCad)
    .then(() => {
      closeCadastro();
    })
    .catch((error) => {
      alert(getErrorMessageCad(error));
      openCadastro();
    });
}

function getErrorMessageCad(error) {
  if (error.code == "auth/invalid-email") {
    return "Cadastro inválido.";
  }
  return "Cadastro inválido.";
}

function recoverPassword() {
  const email = document.getElementById("emailLogin").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Email de Recuperação Enviado");
    })
    .catch((error) => {
      alert(getErrorMessageRedf(error));
      openRecuperacao();
    });
}
function getErrorMessageRedf(error) {
  if (error.code == "auth/missing-email") {
    return "E-mail inválido.";
  }
}
