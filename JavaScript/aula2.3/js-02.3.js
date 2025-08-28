// Objetos liteais (não deriva de uma classe) possuiem atributos e metododos

const pessoa = {};
document.write(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando...";
  },
  frear() {
    return "Freando...";
  },
};

// exibindo as propriedades do objeto:
document.write(`<p>o modelo do carro é ${carro.modelo} </p>`);
document.write(`<p>a cor do carro é ${carro.cor} </p>`);
document.write(`<p>${carro.acelerar()}</p>`);
document.write(`<p>${carro.frear()}</p>`);

const produto = {
  nome: "computador",
  marca: "Lenovo",
  preco: 3000,
  descricao: "PC morderno com bom desenpenho.",
};

document.write(
  `<p>O ${produto.nome} da marca ${produto.marca} custa em torno de ${produto.preco}! ${produto.descricao} </p>`
);

// ARRAY d objetos (listas de objetos):
const listaProdu = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desenpenho, pronto para uso.",
  },
  {
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento.",
  },
  {
    nome: "Celular",
    marca: "apple",
    preco: 6000,
    descricao: "ultra resistente",
  },
];

//exibindo o Array de Objetos com forEach
listaProdu.forEach((produto) => {
  document.write(`
        <p>
            Produto ${produto.nome} <br>
            Marca: ${produto.marca}<br>
            Preço: ${produto.preco}<br>
            Descrição: ${produto.descricao}<br>
            
        </p>`);
});
