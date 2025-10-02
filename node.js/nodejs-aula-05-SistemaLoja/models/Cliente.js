// É no model que criaremos a estrutura da tabela do banco de dados

import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//definindo a estrutura da tabela 
// o metodo DEFINE cria a tabela
const Cliente = connection.define('clientes', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
//sincronizando a tabela com o banco de dados
Cliente.sync({force: false});

export default Cliente;