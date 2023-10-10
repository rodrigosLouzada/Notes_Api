const { hash, compare } =require("bcryptjs");
const AppError = require("../utils/AppError"); // a classe appError (CLASSE base para uso) foi importada para ser conhecido e por ser 
//instanciada
// se houvesse um outro tipo de usuário como professor, teriam arquivos separados de progfessorController e uma classe dentro de appERROR
//p ele/ O THROW lança um tipo de erro e o catch impediria dele chegar ao erro geral, iria parar ali

const sqliteConnection = require("../database/sqlite"); // se importou a pasta index que faz o arquivo que contém o bando de dados
// que podem conter várias tabelas, a depender do envio(send) da pagina, e se cria outra tabela aos moldes no arquivos

// dois caminhos possiveis, ou o controller funciona e roda na server, ou ele da erro nos casos, e instanciado e jogado
// e por intance of no server, utlizado

class UsersController {
    async create(request, response) {
        const {name, email, password}= request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)" , [email])

        if(checkUserExists) {
            throw new AppError("este e-mail já está em uso")
        }

        const hashedPassword =  await hash(password, 8);

        await database.run(
            "INSERT INTO users (name, email, password) VALUES(?, ?, ?)" ,
             [name, email, hashedPassword]
        );

        return response.status(201).json();
    }


    async update(request, response) {
        const { name, email , password , old_password} = request.body;
        const {id} = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)" , [id]);

        if(!user) {
            throw new AppError("usuário não encontrado")
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)" , [email]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("este e-mail já está em uso");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if(password && !old_password){
            throw new AppError("é necessário a senha antiga para mudar a senha!")
        }

        if(password && old_password){
            const checkOldPassword = await compare(old_password, user.password);
            
            if(!checkOldPassword) {
                throw new AppError("a senha antiga não confere!")
            }

            user.password = await hash(password, 8);
        }


        await database.run(`
        UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ? `,
        [user.name , user.email, user.password , id]
        );

        return response.json();
        //p padrão já é um status 200 quando ocorre sucesso, portanto, ao encerrara atualização, um json 
        // atualização de dados na tabela, com dois tipos de erro, email em uso, ou sem o id q ele quer mudar for diferente do id da tabela dele
    }
}

module.exports = UsersController;

/* if(!name) {        ISSO ESTAVA DENTRO DO CREATE
    throw new AppError("nome é obrigatório!");
}

response.status(201).json({name, email, password}); */