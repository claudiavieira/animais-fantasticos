export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((preco) => {
      // console.log(preco.BRL.sell);
      const btcPreco = document.querySelector(target);
      // equivalente a mil reais em bitcoin. tofixed é para indicar quantos decimais exibir, neste caso, 4
      btcPreco.innerText = (1000 / preco.BRL.sell).toFixed(4);
    }).catch((erro) => {
      // console.log(Error(erro));
    });
}
