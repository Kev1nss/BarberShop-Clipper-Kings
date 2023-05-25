function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    const entrarBtn = document.querySelector("#entrar-btn");
    entrarBtn.addEventListener("click", openModal);
  }
}

const modal = document.querySelector(".modal-container");
const modalBackground = document.querySelector(".modal-background");

function openModal() {
  modal.classList.add("active");
  modalBackground.addEventListener("click", closeModalsOnClickOutside);
}

function closeModal() {
  modal.classList.remove("active");
  modalBackground.removeEventListener("click", closeModalsOnClickOutside);
}

const modalCadastro = document.querySelector(".modal-container-cadastro");
const modalBackgroundCadastro = document.querySelector(
  ".modal-background.modal-container-cadastro"
);

function openCadastro() {
  modalCadastro.classList.add("active");
  modalBackgroundCadastro.addEventListener(
    "click",
    closeModalsCadastroOnClickOutside
  );
}

function closeCadastro() {
  modalCadastro.classList.remove("active");
  modalBackgroundCadastro.removeEventListener(
    "click",
    closeModalsCadastroOnClickOutside
  );
}

const modalRecuperacao = document.querySelector(".modal-container-recuperacao");
const modalBackgroundRecuperacao = document.querySelector(
  ".modal-background.modal-container-recuperacao"
);

function openRecuperacao() {
  modalRecuperacao.classList.add("active");
  modalBackgroundRecuperacao.addEventListener(
    "click",
    closeModalsRecuperacaoOnClickOutside
  );
}

function closeRecuperacao() {
  modalRecuperacao.classList.remove("active");
  modalBackgroundRecuperacao.removeEventListener(
    "click",
    closeModalsRecuperacaoOnClickOutside
  );
}

function closeModalsOnClickOutside(event) {
  if (event.target === modalBackground) {
    closeModal();
    closeCadastro();
    closeRecuperacao();
  }
}

function closeModalsCadastroOnClickOutside(event) {
  if (event.target === modalBackgroundCadastro) {
    closeCadastro();
  }
}

function closeModalsRecuperacaoOnClickOutside(event) {
  if (event.target === modalBackgroundRecuperacao) {
    closeRecuperacao();
  }
}
