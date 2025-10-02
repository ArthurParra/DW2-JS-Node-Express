// importando sequelize:
import Sequelize from "sequelize";
// criando os dados de conexão com o banco de dados:
const connection = new Sequelize({ //o objeto será uma instancia
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  //definindo o banco de dados da aplicação:
  database: "nossaloja",
  timesize: "-03:00",

});

export default connection;
//o arquivo de conexão não muda