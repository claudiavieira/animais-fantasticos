export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt'); /* selecionando titulo */
  const activeClass = 'ativo';
  console.log('claudia teste');
  function activeAccordion() {
    // console.log(this.nextElementSibling);
    this.classList.toggle(activeClass);

    // adiciona e retira (intercala com toggle) a classe ativo no proximo elemento da lista
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
