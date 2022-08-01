import debounce from './debounce';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; // ao inves da animação ocorrer no topo, ela ocorre mais ou menos na metade da tela (40% da tela) que é o que falta de 0.6

    // é preciso dar um bind do this.checkDistance só porque o animaScroll() é uma função de callback dentro de uma classe
    // Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
    this.checkDistance = debounce(this.checkDistance.bind(this), 50); // o debounce faz com que a função seja ativada menos vezes
  }

  // Pega a distancia de cada item em relação ao topo do site
  getDistance() {
    // Pegando a distacia de cada section.
    /* Para retornar um valor preciso substituir o forEach por map, mas só posso usar map em array. E sections não é array mas sim arraylike, entao preciso transformar em array.
    Posso transformar de varias formas, usando array.From ou desestruturando [...this.sections].map
    */
    // this.distance = this.sections.forEach((section) => {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop; // a distancia entre a seção e o topo, número fixo
      // console.log('a distancia é de ', offset);
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
    // console.log(this.distance);
  }

  // Verifica a distancia em cada objeto em relação ao scroll do site
  checkDistance() {
    // Verificar se o offset do elemento ja passou do scroll, como saber onde o scroll está? em window.pageYOffset
    // console.log('teste debounce');
    // console.log(window.pageYOffset);
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
      // console.log(item.element);
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
