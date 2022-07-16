import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    console.log(animal);

    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    console.log(div);

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      console.log(animaisJSON);
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        // eslint-disable-next-line max-len
        numerosGrid.appendChild(divAnimal); // appendChild => ou seja vai adicionar o filho um atras do outro
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animaisapi.json'); // se fosse uma url externa era só colocar de onde está puxando
}
