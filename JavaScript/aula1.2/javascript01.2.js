//Função anônima:
// function (){
//   return n1 + n2;
// }
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado de some é ${soma(8, 7)}</p>`);

const tipo = typeof soma;
document.write(`${tipo}`);

//Arrow functions (função anônima):
const dobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)} </p>`);

//Arrow function com mias de um parâmetro:
const calc = (num1, operador, num2) => {
  return eval(` ${num1} ${operador} ${num2}`);
};
//eval() no JavaScript é uma função nativa que realiza cálculos a pertir de dois numeros e um operador.
document.write(`<p>O resultado da operação é ${calc(1992, "-", 1)} </p>`);

//simplificando arrow function com um unico retorno:
const calculadora = (num1, opera, num2) => eval(`${num1}${opera}${num2}`);
document.write(
  `<p>O resultado da operação é: ${calculadora(1990, "+", 4)} </p>`
);

//IIFE - Função imediata (Immediately Invoked Functon Expression):
const iife = (function () {
  document.write(`<p>Esotu sendo executada imediatamente</p>`);
})();

//IIFE COM PARÂMETRO:
const loadUser = (function (user) {
  document.write(
    `Carregando as informações do usuário: <strong>${user}</strong>...`
  );
})("Tutu");
