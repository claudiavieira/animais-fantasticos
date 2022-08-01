export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    // o split transforma a string em um array => ['1', '2', '3', '4', '5']
    // como a array esta com numeros dentro porem na vdd sao strings, preciso transformar em um número real, para isso posso usar o map que itera por cada item da array e retorna uma array nova, neste caso eu passando o construtor Number dentro do map é retornado uma array de numeros
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    // console.log(this.diasSemana);

    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    // console.log(this.horarioSemana);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    // console.log(diaAgora); // dia 0 hoje é domingo
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; // o tempo do brasil em relação ao UTC é -3
    // console.log(horarioAgora); // 15 horas
  }

  estaAberto() {
    // verificando se a data e hora atual corresponde se esta aberto ou nao
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1; // indexOf verifica no array em qual posição encontra, se retornar -1 significa que nao achou. Então se for diferente de -1 significa que está aberto
    // console.log(semanaAberto);
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

// // new Date() => O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.
// const agora = new Date();
// agora;
// // Semana Mês Dia Ano HH:MM:SS GMT
// agora.getDate() // Dia
// agora.getDay() // Dia da Semana ex: 5 = Fri
// agora.getMonth() // Número dia mês
// agora.getFullYear() // Ano
// agora.getHours() // Hora
// agora.getMinutes() // Minutos
// agora.getTime() // ms desde 1970
// agora.getUTCHours() - 3 // Brasília

// const natal = new Date('Dec 24 2022 23:59');

// function transformarEmDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000); // 1 dia tem 24 horas * 60 min * 60s * 1000ms
// }

// const diasAgora = transformarEmDias(agora.getTime());
// const diasNatal = transformarEmDias(natal.getTime());

// console.log('Faltam para o natal ', Math.floor(diasNatal - diasAgora), 'dias');
