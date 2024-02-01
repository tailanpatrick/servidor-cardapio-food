import express from "express";
import cors from 'cors';
import routeProduct from "./routes/route.product.js";
import routeOrder from "./routes/route.order.js";

const app = express();

app.use(express.json());
app.use(cors());

// Rotas registradas
app.use(routeProduct);
app.use(routeOrder)



app.listen(3001, function(){
    console.log('Servidor executando na porta 3001');

});