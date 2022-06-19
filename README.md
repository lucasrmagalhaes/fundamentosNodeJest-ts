**O que é o Node?** É um software de código aberto, que permite a execução do JavaScript fora do navegador web.

**Single-thread x Multi-thread**
- Single-thread: cria uma pilha com as funções chamadas e executa uma por vez, mesmo que elas sejam concorrentes.
- Multi-thread: Executa as ações paralelamente, independente se estas são concorrentes.

```
npm init --y
```

```
yarn add nodemon
```

```
yarn add express
```

**O que é TypeScript?** É uma linguagem de programação e um superset do JavaScript. Ele permite trabalhar com tipagens no desenvolvimento das aplicações.

```
yarn add -D typescript
```

```
npx tsc --init
```

```
yarn add -D @types/express
```

```
yarn add -D @types/node
```

**O que é o Jest?** É uma framework, desenvolvido pelo Facebook, que permite escrever testes automatizados em aplicações JS ou TS.

```
yarn add -D jest
```

```
yarn add -D @types/jest
```

```
yarn add -D ts-jest
```

**Extensão:** Jest Runner

```
npx jest --init
```

**Padrão AAA** 
- Arrange - Montagem do cenário de testes;
- Act - Ação que será testada; e
- Assert - Validação dos resultados esperados.

**Mocks:** São objetos, que substituem implementações reais em um cenário de testes unitários. Isso permite validar apenas os comportamentos afetados pelo novo componente.

**Testes Unitários:** São os testes mais simples de serem escritos na aplicação. Como o nome sugere a ideia é testar apenas o componente (unidade) ao qual ele faz referência.

```
yarn test
```