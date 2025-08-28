//Arrays (vetores): Servem para armazenar uma lista, ou seja, diferanetes elementos em unica variavel.

const product = ["Computador", "Noteboock", "Celular", "Tablet"];
document.write(`<p>${product} </p>`);
document.write(typeof product);
document.write("<p>exibindo um elemento do array atrvéwsdo indice:</p>");
document.write(`<p>${product[1]} </p>`);

document.write("Percorrendo um array através do forEach:");
product.forEach(function (produto) {
  document.write(`<p>${produto}</p>`);
});

document.write("Mostrando os indices e vaores com forEach:");
product.forEach((produto, i) => {
  document.write(`<p>${i + 1} - ${produto}</p>`);
});