export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  // const accordionList = document.querySelectorAll('[data-anime="accordion"] dt'); /* selecionando titulo */
  // const activeClass = 'ativo';
  // console.log('claudia teste');
  toggleAccordion(item) {
    // console.log(this.nextElementSibling);
    item.classList.toggle(this.activeClass);
    // adiciona e retira (intercala com toggle) a classe ativo no proximo elemento da lista
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
