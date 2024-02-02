import { Router, json} from "express";
import { db, query } from "../config/database.js"


const routeOrder = Router();

routeOrder.post("/pedidos", function (req, res) {

    let sql = `INSERT INTO pedido (id_usuario, nome, telefone, endereco,
        bairro, cidade, uf, cep, total, dt_pedido) VALUES (?,?,?,?,?,?,?,?,?,current_date) returning id_pedido`;

    let dataReq = req.body;

    db.all(sql, [dataReq.id_usuario, dataReq.nome, dataReq.telefone, dataReq.endereco, dataReq.bairro, dataReq.cidade, dataReq.uf, dataReq.cep, dataReq.total],  function (err, rows) {
        return err ? ( () => {
            res.status(500).send('Ocoreu um erro: ' + err.message);
        })() : ( async () => {
            let id_ped = rows[0].id_pedido;

            // Itens pedidos

            for (let prod of dataReq.itens){
                sql = `INSERT INTO pedido_item (id_pedido, 
                    id_produto, qtd, vl_unitario, vl_total)
                    VALUES (?, ? , ? , ? , ?)`;
                
                await query(sql, [id_ped, prod.id_produto, prod.qtd, prod.vl_unitario, prod.vl_total]);
            }

            res.status(201).json({id_pedido : id_ped});
        })();
    })

});

routeOrder.get("/pedidos", function(req, res) {
    db.all(`SELECT id_pedido, total, strftime('%d/%m/%Y', dt_pedido) as dt_pedido FROM pedido ORDER BY id_pedido DESC`, [], function (err, rows){ 
        return err ? 
        res.status(500).send("Ocorreu um erro: "+ err.message)
        : res.status(200).json(rows);
    });
});

export default routeOrder;