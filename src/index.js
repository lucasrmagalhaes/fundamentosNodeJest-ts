import express from 'express';

const server = express();

server.listen(5000, () => {
    console.log('Servidor ON na porta 5000.');
});