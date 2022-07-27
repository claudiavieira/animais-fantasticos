/* eslint-disable max-len */
export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  /*
  * Quando eu tenho uma função dentro de uma classe que ela nao tem referencia e não precisa do objeto pra funcionar, eu posso definir ela como uma função estatica
  * Recebe um elemento do DOM com número em seu texto. Incrementa a partir de 0 até o número final
  */
  static incrementarNumero(numero) {
    const total = +numero.innerText; // o + é para transformar a string em numero
    const incremento = Math.floor(total / 100);
    let start = 0; // começo do número começa no zero
    const timer = setInterval(() => {
      start += incremento;
      // console.log(start);
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random()); // 15 é o tempo
    // console.log(total);
  }

  // Ativa incrementar número para cada número selecionado do DOM
  animaNumeros() {
    // para usar a função estatica incrementarNumero, preciso passar o construtor, pois ele é um método do construtor e não do objeto
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  /// ////////////////////////////////////////
  // eslint-disable-next-line max-len
  // abaixo foi criado um observador que ficará olhando para a seção dos numeros "grid-section numeros". Sempre que algum atributo desta seção mudar, ou seja receber o atributo ativo (conforme formos descendo o scroll e chegar nela), vou querer que um evento ocorra e esse evento é a mutação

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    // eslint-disable-next-line spaced-comment
    //console.log('mutou');
    // console.log(mutation[0].target.classList.contains('ativo')); // retorna o [MutationRecord] que é uma arrayLike que parece uma array e dentro dessa array vai ter todas as mutações que ocorreram nesse momento. No nosso caso, só estamos observando a mutação de atributo e neste caso o unico atributo que muda é o class. Entao ele sempre vai dar pra gente o item zero, entao podemos acessar direto essa mutação com o zero mutation[0]
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); // para de observar, só vai animar uma vez os numeros
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
