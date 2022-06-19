import { UsersController } from './usersController';
import { Request } from 'express';
import { makeMockResponse } from '../mocks/mockResponse';

describe('Users Controller', () => {
    const usersController = new UsersController();

    const mockResquest = {} as Request;
    const mockResponse = makeMockResponse();

    it('Deve listar os nossos usuários', () => {
        usersController.listarUsuario(mockResquest, mockResponse);

        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toHaveLength(2);
    });

    it('Deve criar um novo usuário', () => {
        mockResquest.body = {
            name: 'Lucas'
        }

        usersController.criarUsuario(mockResquest, mockResponse);

        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ 'mensagem': 'Lucas criado(a) com sucesso.' });
    });

    it('Não deve criar um usuário com o nome em branco', () => {
        mockResquest.body = {
            name: ''
        }

        usersController.criarUsuario(mockResquest, mockResponse);

        expect(mockResponse.state.status).toBe(403);
        expect(mockResponse.state.json).toMatchObject({ 'mensagem': 'Não é possível criar usuários sem um nome.' });
    });
});