//metodos de manipulação de vetores

let vetor = ["laranja", "maça", "banana"];
document.write(`<p>Nosso vetor é o: ${vetor}</p>`);

vetor[3] = "morango";
document.write(`<p>nosso vetor agora é o: ${vetor}</p>`);

//PUSH - Insere  um novo elemento no final do vetor:
vetor.push("abacaxi");
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`);

vetor[0] = "pera";
document.write(`<p>nosso vetor agora é o: ${vetor}</p>`);

//UNISHIFT - Insere um novo elemento no inicio do vetor:
vetor.unshift("laranja");
document.write(`<p>Nosso vetor agora é o: ${vetor}</p>`);

//LENGHT - Retorna o número de elementos no vetor;
let num = [6, 8, 2, 9, 3, 800, 200];
document.write(`<p>Nosso novo vetor agora é o: ${num}</p>`);
document.write(`<p>O numero de elementos do nosso vetor é: ${num.length} </p>`);

// SORT - Ordena o vetor:
document.write(`<p>O primeiro elemnto do vetor é: ${num[0]} </p>`);

let numOrder = num.sort();
// voce ordenou uma variavel (num) dentro de outra (numOrder)
document.write(`<p>O vetor ordenado é: ${numOrder} </p>`);

document.write(`<p>a lista de frutas ordenada é: ${vetor.sort()} </p>`);

// ordenando um vetor numerico em ordem crescente:
document.write(`<p>${num.sort((a, b) => a - b)} </p>`);

//ordenando um vetor numerio em ordem decrescente:
document.write(`<p>${num.sort((a, b) => b - a)} </p>`);


