import express from "express";
const router = express.Router();
import User from "../models/User.js";

// ROTA de login
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA de cadastro
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// ROTA de criação de usuario
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulario
  const email = req.body.email;
  const password = req.body.password;
  //Enviando os dados para o banco de dados
  User.create({
        email: email,
        password: password,
    }).then(() => {
      res.redirect("/login");
    }).catch((err) => {
      console.log(err);
    });

});

export default router;
