class  AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports= AppError ;
// arquivo de molde para separar os tipos de classe, nesse caso para users, e importamos eles para usar novamente
// para serem conhecidos e poder ser instanciado em nEW APPERROR com os metodos herdados
// no caso de appErro.js para usercontrollers para ser exportado no index, onde existe o TRATAMENDO DE ERRO P O TIPO DE INSTANCIA DELE
/*
class  AppError {
    message;
    statusCode = 400;

    constructor() {
    }

    inicilizarValores(stCode = 500, msg= "") {
        this.message = msg;
        this.statusCode = stCode;
    }
}


ob1 = new AppError()

ob1.message //undefined
ob1.statusCode // 400

ob2 = new AppError()

ob2.inicilizarValores(300, "dinho")

ob2.message // dinho 
ob1.statusCode // 500 */
