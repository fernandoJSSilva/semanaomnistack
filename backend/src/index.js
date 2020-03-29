const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Rotas / Recurso
 */

/**
 * Métodos HTTP
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parãmetros nomeados enviados após "?" (Filtros, paginação)
 * Route Params: Parãmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição,utilizado para criar ou alterar recursos
 */

 /**
  *  Tipos de bancos
  * 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */


 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */

app.listen(3333);