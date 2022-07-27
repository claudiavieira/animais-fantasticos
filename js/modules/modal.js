export default class Modal {
  // selecionando todos os itens/botoes que precisa tomar ação neles (botao de abrir, fechar e o modal)
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
    // console.log(event);
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault(); // para que nao saia da página
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    // console.log(this); // vai ser sempre o section
    // console.log(event.target);

    // foi colocada essa condição porque sem ela se eu clicar inclusive no modal fecha e quero que fecha somente qdo clicar fora
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
