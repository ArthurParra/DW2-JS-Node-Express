const express = require("express"); //importando o Express (framework):

const app = express(); //Iniciando o Express na vaiavel "APP":

// configurando o EJS:
app.set("view engine", "ejs");

//criando a primeira rota do site (rota principal):
// REQ = trata a REQUISIÇÂO
// RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

// ROTA de produtos
app.get("/produtos", (req, res) => {
  res.render("produtos");
});

// criando a rota de clientes
app.get("/clientes", (req, res) => {
  res.render("clientes");
});

//Iniciando o servidor HTTP
const port = 8080; //O servidor escutará na porta 8080

app.listen(
  port,
  (
    error //o "error" ira capturar o erro que acontecer
  ) => {
    if (error) {
      console.log(
        `Não foi possivel iniciar o servidor. Ocorreu um ERRO! ${error}`
      );
    } else {
      console.log(`Servidor iniciado com sucesso em:
            http://localhost:${port}`);
    }
  }
);
