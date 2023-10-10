const {Router} = require("express");

const userRouter= require("./users.routes"); // se importou o useroutes para importa-lo quando se usar o caminho /users, que redireciona para a pasta

const routes = Router();
routes.use("/users", userRouter); // VEM PRA CA  'users' ele que indica a rota que ele importou antes do arquivo q contem o agrupamento de rotas
// não sendo mais necessário o primeiro nome do agrupamento, porque ele já está aqui, só é jogado para o arquivo,
// e o resto que o usuário digitou, já faz o resto


module.exports = routes;