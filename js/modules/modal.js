export default function initModal() {
  // selecionando todos os itens/botoes que precisa tomar ação neles (botao de abrir, fechar e o modal)
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  // console.log(botaoAbrir, botaoFechar, containerModal);

  function abrirModal(event) {
    event.preventDefault(); // para que nao saia da página
    containerModal.classList.toggle('ativo');
    // console.log(event);
  }

  function fecharModal(event) {
    event.preventDefault(); // para que nao saia da página
    containerModal.classList.remove('ativo');
  }

  function cliqueForaModal(event) {
    // console.log(this); // vai ser sempre o section
    // console.log(event.target);

    // foi colocada essa condição porque sem ela se eu clicar inclusive no modal fecha e quero que fecha somente qdo clicar fora
    if (event.target === this) {
      fecharModal(event);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}
