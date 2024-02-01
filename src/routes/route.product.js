import { Router } from "express";
import {db} from "../config/database.js"

const routeProduct = Router();

routeProduct.get("/produtos", function(req, res) {
    db.all('SELECT * FROM produto', [], function (err, rows){ 
        return err ? 
        res.status(500).send("Ocorreu um erro: "+ err.message)
        : res.status(200).json(rows);
    });
});


export default routeProduct;