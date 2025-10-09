import express from "express";
const router = express.Router();
// imprtando o model de Cliente:
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //select * from clientes
  Cliente.findAll()
    .then((clientes) => {
      //then => Promessa bem sucedida
      res.render("clientes", {
        clientes: clientes,
      });
      // catch => Falha na resolução da promessa
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE CLIENTES:
router.post("/clientes/new", (req, res) => {
  //coletando os dados do formulario
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    // coluna : dado do form
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

//ROTA DE EXCLUSÂO DE CLIENTE
// :id é um parametro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  // destroy() -> exclui um registro no banco
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/edit/:id", (req, res) => {
  //buscando o cliente pela ID
  const id = req.params.id; // -> coleta o ID
  // findByPk() -> busca um registro pela chave primaria (id) e será um unico registro
  Cliente.findByPk(id).then((cliente) => {
    res.render("clienteEdit", {
      cliente: cliente,
    });
  });
});

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/clientes/update/:id", (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    {
      where: { id: id },
    }
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
