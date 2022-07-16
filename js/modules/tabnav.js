export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li'); // selecionar cada li
  // console.log(tabMenu);
  const tabContent = document.querySelectorAll('[data-tab="content"] section'); // selecionar cada section
  // console.log(tabContent);

  function activeTab(index) {
    tabContent.forEach((section) => { // primeiramente remover todas as classes 'ativo'
      section.classList.remove('ativo');
    });
    // console.log(tabContent[index].dataset.anime);
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo'); /* quando entrar na página deixar o conteudo da primeira img ativo */

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
