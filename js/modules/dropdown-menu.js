import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    // console.log(event);
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  dropdownMenus.forEach((menu) => {
    // menu.addEventListener('click', handleClick);
    // menu.addEventListener('touchstart', handleClick);

    // eslint-disable-next-line max-len
    // para cada um dos dois eventos criados abaixo (userEvent) eu vou criar a função de callback. A forma usada pode ser adicionado quantos eventos quisermos. No caso abaixo foram dois o 'touchstart' que é melhor pra mobile e da um clique mais instantaneo, ja o 'click' demora alguns milesimos de segundos
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
