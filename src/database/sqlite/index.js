const sqlite3 = require("sqlite3"); // arquivo de conexão
const sqlite = require("sqlite"); // arquivo de uso de drive de conexão
const path = require ("path");

async function sqliteConnection(){
    const database = await sqlite.open({
        filename : path.resolve(__dirname, "..", "database.db"),
        driver : sqlite3.Database
    });

    return database ;
}
// a função dentro de path resolve q a partir desse diretório, voltando uma pasta, se executa a criação de uma pasta
// database.db, e o sqlite3 é a execução do driver na conexão, necessário a essa dinamica

module.exports = sqliteConnection