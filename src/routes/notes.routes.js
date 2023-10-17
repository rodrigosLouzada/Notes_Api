const  {Router} = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes= Router();

const notesController = new NotesController();

notesRoutes.post("/:user_id" , notesController.create);
notesRoutes.get("/:id" , notesController.show);
notesRoutes.delete("/:id", notesController.delete);


module.exports = notesRoutes;

/* se importou o express, se importou o notes controller q contem todo a classe inteligente em migrate, se faz o express em execução
se instancia a classe importada, e para o metodo url de inserção(put), se coloca 1 parametro o endereço q é o id fornecido p enquanto,
e 2 parametro o metodo da classe instanciada e gera a inserção na tabela em knex,
então, se exporta isso , se importa p o index todo o trabalho de url-controller p aquele caminho

 */