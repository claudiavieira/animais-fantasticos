import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // Define 'touchstart' e 'click' argumento padrão de events caso o usuário não defina
    if (events === undefined) {
      // O problema de adicionar os dois eventos ['touchstart', 'click'] ao mesmo item: é que o click é emulado tambem no mobile, então quando vc clica mesmo dando touchstart no mobile, ele tambem vai acionar o evento click. Então esta acionando dois eventos ao mesmo tempo. Então o menu nao abre.
      // Para corrigir isso por padrão, se vc prevenir o padrao do touchstart ele vai previnir que o click aconteça (padrão em todas as plataformas). Então em openMenu() será necessário adicionar: event.preventDefault();
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    // ao clicar no botão, vou querer adicionar a classe active no menulist e tambem ao menuButton
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    }); // quando clicar fora do elemento dar menuList
  }

  addMenuMobileEvents() {
    // Como o this.openMenu esta com evento de callback eu tenho que dar um bind dele la no construtor
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
