// Classes no javascript

//criando uma classe

//nomes de classes devem sempre iniciar com a primeira letra maiuscula
class Carro {
  //para criar os Atributos da Classe deve-se utilizar o metodo "constructor"
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //metodos
  buzinar() {
    return "beep! beep!";
  }
}

//criando INSTANCIAS (objetos) derivadas da Classe Carros:
const carroPopu = new Carro("Fiat", "Uno", 2012);
document.write(`
    <p>O carro ${carroPopu.marca} modelo ${carroPopu.modelo} é do ano de ${
  carroPopu.ano
}. Quando buzina faz ${carroPopu.buzinar()}</p>
    `);

// objeto - carro esportivo:
const carroEsport = new Carro();
carroEsport.marca = "Chevrolet";
carroEsport.modelo = "Camaro";
carroEsport.ano = 2024;

document.write(`
    <p>O carro ${carroEsport.marca} modelo ${carroEsport.modelo} é do ano de ${
  carroEsport.ano
}. Quando buzina faz ${carroEsport.buzinar()}</p>
    `);

// Adicionando um novo atributo:
carroEsport.corNeon = "azul";

//adicionando um novo atributo:
carroEsport.turbo = () => {
  return "VRUUUUMMMMMMMM!!!!!!! O carro acelera muito!!";
};

document.write(``);
