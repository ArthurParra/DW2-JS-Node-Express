//VARIAVEIS PODEM SER DECLARADAS EM TRÊS FORMAS:
// VAR, LET e CONST

//VAR: No geral, evite seu uso, pode não ser muito seguro.

//LET: Utilize quando for necessario reatribuir o valor da variável.
//(Declaração x Atribuição: Declaração é criar a variável, Atribuição é dar um valor a essa variável criada).

//CONST: O const é de "constante", no const não se reatribui valor. Utilize quando não for necessário reatribuir o valor da variável.
//(no const você deve declarar e ja atribuir o valor da variável).

// var nome = "thuti"
// var nome = "maria"
// let cidade = "Registro"
// let cidade = "pariquera" // NÃO PODE
// let endereco
// endereco = "rua pipipi popopo"
// CONST IDADE // NÃO PODE
// const idade = 18
// idade = 20 // NÃO PODE

// TIPOS DE FUNÇÕES

//função simples:
const message = "<h2> Olá! Seja Bem vindo essa é sua prmeira função!</h2>";
function showMassege() {
  document.write(message);
}

//Invocando a função:
showMassege();

// Função com parâmetros:
const user = "thuti";

function userMessager(user) {
  //Essa função recebe um parâmetro
  document.write(`<h3>o que deseja fazer hoje? ${user}</h3>`);
  // ${} -> tample strings / literal strings
  // É usado para inserir variáveis dentro de strings (CRASE)
}
userMessager(user); // ARGUMENTO

//Função com mais de um parâmetro:
const n1 = 10;
const n2 = 20;

function mult(n1, n2) {
  //Essa  função recebe dois parâmetros
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a: ${result}`);
}
mult(n1, n2);

//Função com retorno:
const num1 = 1000;
const num2 = 2;

function div(num1, num2) {
  return num1 / num2;
}

document.write(
  `<p>A divisão de ${num1} e ${num2} é igual a: ${div(num1, num2)} </p>`
);

//Função com diferentes retornos:
const number = 6;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(
  `<p>O número ${number} é <strong>${parImpar(number)}</strong></p>`
);
