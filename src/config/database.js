import sqlite3  from "sqlite3";

const SQLite3 = sqlite3.verbose();

function query(command, params, method = 'all'){
    return new Promise(function (resolve, reject) { 
        db[method](command, params, function(error, result){

            error ? reject(error) : resolve(result);

        })
     }); 
}

const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, function(err){
    return err ? console.log('Erro ao conectar com o banco: ' + err.message) 
    : console.log('Conectado ao banco com sucesso!')
});


export {db, query};
