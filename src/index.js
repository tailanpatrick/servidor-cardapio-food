import express from "express";
import cors from 'cors';
import routeProduct from "./routes/route.product.js";
import routeOrder from "./routes/route.order.js";
import os from 'os';

const app = express();

app.use(express.json());
app.use(cors());

// Rotas registradas
app.use(routeProduct);
app.use(routeOrder)



app.listen(3001, function () {
    console.log('Servidor executando na porta 3001');

    // Obtém informações sobre as interfaces de rede
    const interfaces = os.networkInterfaces();

    // Itera sobre as interfaces de rede
    for (const item in interfaces) {
        // Itera sobre os endereços IP associados a cada interface
        for (const addressInfo of interfaces[item]) {
            // Verifica se o endereço IP é um endereço IPv4 e não é localhost
            if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
                console.log('Endereço IP do servidor:', addressInfo.address);
            }
        }
    }
});