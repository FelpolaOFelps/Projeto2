//fazendo importação do require
const express = require("express");

//Rotas
const router = express.Router();
router.get('/', (req, res) => res.send("Eu consegui..."));

//configurações basicas do aplicativo
const app = express();

//foi passado 1 rota pois criamos apenas 1
app.use("/", router);

//exportamos o app
module.exports = app;