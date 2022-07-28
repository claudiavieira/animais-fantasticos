export default function initFetchBitcoin() {
  console.log('teste');
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((preco) => {
      console.log(preco.BRL.sell);
      const btcPreco = document.querySelector('.btc-preco');
      // equivalente a mil reais em bitcoin. tofixed é para indicar quantos decimais exibir, neste caso, 4
      btcPreco.innerText = (1000 / preco.BRL.sell).toFixed(4);
    }).catch((erro) => {
      console.log(Error(erro));
    });
}
