import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define 'touchstart' e 'click' argumento padrão de events caso o usuário não defina
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdown menu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    // console.log(event);
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      // menu.addEventListener('click', activeDropdownMenu);
      // menu.addEventListener('touchstart', activeDropdownMenu);

      // eslint-disable-next-line max-len
      // para cada um dos dois eventos criados abaixo (userEvent) eu vou criar a função de callback. A forma usada pode ser adicionado quantos eventos quisermos. No caso abaixo foram dois o 'touchstart' que é melhor pra mobile e da um clique mais instantaneo, ja o 'click' demora alguns milesimos de segundos
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu); // como estou ativando um evento de callback tenho que fazer o bind
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
