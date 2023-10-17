const {Router} = require("express");

const userRouter= require("./users.routes"); // se importou o useroutes para importa-lo quando se usar o caminho /users, que redireciona para a pasta
const notesRouter= require("./notes.routes");

const routes = Router();
routes.use("/users", userRouter); // VEM PRA CA  'users' ele que indica a rota que ele importou antes do arquivo q contem o agrupamento de rotas
// não sendo mais necessário o primeiro nome do agrupamento, porque ele já está aqui, só é jogado para o arquivo,
// e o resto que o usuário digitou, já faz o resto
routes.use("/notes", notesRouter);
// se importa p o index todo o trabalho de url-controller p aquele caminho

module.exports = routes;

/* aqui é um empacotador de rotas, ele pega as rotas gerais do path(users/notes ) e utiliza como 1 parametro,
sendo o 2 o arquivo q contem as rotas especificas, q tera cada rota especifica ou p users ou notes + como 2 parametro
a classe instanciada do seu controller e metodo sendo aplicados!
*/