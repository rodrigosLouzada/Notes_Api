const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

/* execução da criação de uma tabela pelo registro da tabela escrita em outro arquiv(createusers), a função async cria uma var
q contém a var de importação do conteudo da tabela(como no visualizador de BD), faz a conexão com a tabela e em seguida usa uma promisse p
o contéudo da tabela (vazia) e pela arrow function, executa de um em um, .exec a execução da criação da tabela p/ var q contém o conteudo da tabela
OBS:é necessário criar um arquivo por modelo de tabela, se fossem misturados a lógica iria empurrar o mesmo modelo de tabela de um tipo para todos
*/
//o catch impede o erro de ser jogado no erro geral, p isso deveria ter um novo throw
async function migrationsRun(){
    const schemas = [
        createUsers ,
    ].join('');

    sqliteConnection().
    then(db => db.exec(schemas))
    .catch(error => console.log(error));
}

module.exports = migrationsRun;