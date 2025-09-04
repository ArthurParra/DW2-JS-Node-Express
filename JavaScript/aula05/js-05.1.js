document.write(`<h1>Manipulando data utilizando DATE</h1>`);

const dataAtual = new Date();
document.write(dataAtual);

//pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`);

//pegando o mes atual
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Estmaos no mês de: ${mes}</p>`);

//pegando o ano atual
const ano = dataAtual.getFullYear();
document.writeln(`<p>Estamos no ano de: ${ano}</p>`);

//Pegando o dia da semana
const diaSemana = dataAtual.getDay();
document.write(`<p>Dia da semana é: ${diaSemana}</p>`);

//adicionanod Dias, Mêses e Anos à data atual
//adiacionando 4 anos no ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

//adicionando meses
dataAtual.setMonth(dataAtual.getMonth() + 3);
dataAtual.setDate(dataAtual.getDate() + 10);

//formatção de moeda
//Real
document.write(`<h2>Foramatação de moedas: </h2>`);
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor do salario minimo atual é ${salarioReal}</p>`);

//dolar
const salDolar = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>Salario em dolar: ${salDolar}</p>`);

const salarioConvert = salario * 0.176;
document.write(
  `Salario em valor de dolar: ${salarioConvert.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })}`
);

//Formatação de string (textos)
document.write(`<h3>Formatação de Strings: </h3>`);

const nome = "Tutu";

//alterando para letras MAIUSCULAS:
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`);

//alterando para minusculas:
document.write(`<p>Nome em minusculas: ${nome.toLowerCase()}</p>`);

//removendo os espaços da string
const novoNome = nome.replace(/\s/g, "");

//contando os caracteres de uma string - .lenght
document.write(`<p>Esse nome tem: ${nome.length} letras.</p>`);
