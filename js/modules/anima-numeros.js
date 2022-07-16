/* eslint-disable max-len */
export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    // console.log(numeros);

    numeros.forEach((numero) => {
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
    });
  }

  /// ////////////////////////////////////////
  // eslint-disable-next-line max-len
  // abaixo foi criado um observador que ficará olhando para a seção dos numeros "grid-section numeros". Sempre que algum atributo desta seção mudar, ou seja receber o atributo ativo (conforme formos descendo o scroll e chegar nela), vou querer que um evento ocorra e esse evento é a mutação

  let observer;
  function handleMutation(mutation) {
    // eslint-disable-next-line spaced-comment
    //console.log('mutou');
    // console.log(mutation[0].target.classList.contains('ativo')); // retorna o [MutationRecord] que é uma arrayLike que parece uma array e dentro dessa array vai ter todas as mutações que ocorreram nesse momento. No nosso caso, só estamos observando a mutação de atributo e neste caso o unico atributo que muda é o class. Entao ele sempre vai dar pra gente o item zero, entao podemos acessar direto essa mutação com o zero mutation[0]
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect(); // para de observar, só vai animar uma vez os numeros
      animaNumeros();
    }
  }
  observer = new MutationObserver(handleMutation);

  const observerTarget = document.querySelector('.numeros'); // é o alvo que ele sempre irá observar

  observer.observe(observerTarget, { attributes: true });
}
