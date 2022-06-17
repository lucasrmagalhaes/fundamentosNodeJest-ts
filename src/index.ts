import express from 'express';

const server = express();

server.use(express.json());

server.listen(5000, () => {
    console.log('Servidor ON na porta 5000.');
});