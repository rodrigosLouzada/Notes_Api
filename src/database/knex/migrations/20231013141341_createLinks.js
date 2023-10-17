exports.up = knex => knex.schema.createTable("links", table => {

    table.increments("id");
    table.text("url").notNullable()

    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());

   

});

exports.down = knex => knex.schema.dropTable("links");

/* com o comando knex migrate: make.....  se cria esses arquivos com exports up/down, aqui se cria as colunas da tabela respectiva 
e depois com controller dele, e seu classe/metodo, se obtem os dados de insomnia e os utiliza p/ inserir registros(linhas)
com ids q o usuário digitou(metodo insert após inserir), e isso se repete nos outros, depois as rotas gerais em index, q
direciona p os arquivos com rotas especificas p url q acionam esses metodos das classes intanciadas!

*/