export default function debounce(callback, delay) {
  // debounce: é uma função de ajuda. Ele vai colocar a funcao na fila no settimout e toda vez q ela for ativada vai eliminar a função anterior ate q vc ative apenas 1 de cada vez. É usada para que evite da função ser chamada milhares de vezes
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
