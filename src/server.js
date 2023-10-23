require("express-async-errors"); // p usar o apperror 
require("dotenv/config");

const migrationsRun = require("./database/sqlite/migrations"); // anteriormente const database = require("./database/sqlite/")
const AppError = require("./utils/AppError"); // p importar o apperror e torna-lo conhecido dentro de controller

const express= require("express");
const routes = require("./routes") // 'ROUTES/INDEX' toda vez que não se coloca o caminho do arquivo, ele procura o index dentro da pasta
//então funciona como a importação de todas as rotas, pq index as guarda, e o index tem o trabalho de criar com USE, a rota pro arquivo
// de agrupamento de rotas 

migrationsRun(); // execução da var q vai na função asyn da pasta e cria um arquivo caso ele não exista

const app= express();
app.use(express.json());

app.use(routes) /* ELE ESTÁ INICIALIZANDO AS ROTAS DA APLICAÇÃO COM INDEX(SUA VARIAVEL DE IMPORTAÇÃO)
e para executar esse caminho inteiro de index-users.routes , importar e utiliza-lo, se usa a criação de caminho
com Use e a variavel importada para todo esse caminho como parametro */

// OBSSS aqui se captura os erros gerais e se afunila pelo instance of, que o erro é o que instanciamos em new apperror e lançamos
// em throw ( que importamos, pois estava no arquivo userController.js que importa a classe de APPERROR.JS)
// ->>PORÉM, agora se trata do erro no bando de dados (se já existe) ao invez da falta de um elemento em request.body ...
// ele só captura o erro geral porque não houve um catch que o impediu antes

app.use((error, request, response , next) => {

    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status : "error" ,
            message: error.message
        });
    }

    console.log(error);

    return response.status(500).json({
        status: "error" ,
        message : "internal server error"
    });
});


const PORT= process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));