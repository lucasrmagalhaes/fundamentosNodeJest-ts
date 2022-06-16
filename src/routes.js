import { Router } from 'express';

const routes = Router();
const database = ['Lucas'];

routes.get('/users', (request, response) => {
    return response.status(200).json(database);
});

routes.post('/users', (request, response) => {
    const { name } = request.body;
    database.push(name);
    return response.status(201).json({'mensagem': `Usuário ${name} criado.`})
});

export { routes };