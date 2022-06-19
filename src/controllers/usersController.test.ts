describe('Users Controller', () => {
    it('Deve somar 1 + 1', () => {
        function soma (a: number, b: number) {
            return a + b;
        }

        const resultado = soma(1, 2);

        expect(resultado).toBe(3);
    });
});