export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]'); // em js-menu quero selecionar todos os 'a' que começarem como href com o # que é o link interno

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');// pegando href do item que cliquei
    const section = document.querySelector(href);
    // console.log(section);

    // com o scrollTo, podemos passar direto 2 argumentos: o eixo x e o eixo y. Nesse caso como nao quero mover na horizontal (eixo x) entao vou passar zero, mas quero mover na vertical (eixo y), entao vou colocar pra mover 1000px

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // Forma alternativa
    /* const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    }) */
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
