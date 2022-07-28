import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    console.log(animal);

    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    console.log(div);

    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    // eslint-disable-next-line max-len
    numerosGrid.appendChild(divAnimal); // appendChild => ou seja vai adicionar o filho um atras do outro
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais através de um arquivo JSON e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      console.log(animaisJSON);

      // Após a transformação de json, ativa as funções para preencher e animar os numeros
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();

  // fetchAnimais('./animaisapi.json'); // se fosse uma url externa era só colocar de onde está puxando
}
