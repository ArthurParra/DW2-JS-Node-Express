import express from "express";
const router = express.Router();
// imprtando o model de Cliente:
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //select * from clientes
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});
export default router;
