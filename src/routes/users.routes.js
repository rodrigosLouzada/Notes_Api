const  {Router} = require("express");

const UsersController= require("../controllers/UsersController");

const usersRoutes= Router();

const usersController = new UsersController()

usersRoutes.post("/" , usersController.create);
usersRoutes.put("/:id" , usersController.update);

module.exports = usersRoutes;

/*function myMiddleware (request, response, next) {
    console.log("você passou pelo middleware");

    if(!request.body.isAdmin){
        return response.json({ message : "user unauthorized"})
    }

    next()
}


const usersController = new UsersController() .
/*usersRoutes.use(myMiddleware) o usar assim, com a var de execução do express + USE, com parametro o middleware, ele se aplica a todas as rotas
até pq, para criar qualquer rota, é necessário a variavel executora do express + use/post/get etc */

// o NEXT() atua como uma "copia" do 3 parametro, no caso, usersController.create para escoamento da execução

// usersRoutes.post("/", myMiddleware , usersController.create); o midddleware serve para que o 3 parametro ( o controller) não seja utilizado

//se fazendo de controller ao enviar o response ao servidor, ele é executado ao inves do controller
// o next() é necessário porque ele continua a execução do 3 parametro, imagine se não bate a condição do middleware em if de falta de a ISadm
// porém ele não executa o resto, next é necessário
// OBS IMPORTANTE: a diferença com o appError é que o middleware não deixa o controller ser executado ao lidar com a condição errada
// enquanto o appError está dentro do controller e utiliza ele
// seria com uso de middleware, veja que ele está como 2 parmetro antes da execução






/* usersRoutes.post("/details", (request, response) => {
    const {name, email, password}= request.body;

    response.json({name, email, password});
});

usersRoutes.post("/list", (request, response) => {
    const {name, email, password}= request.body;

    response.json({name, email, password});
}); */

