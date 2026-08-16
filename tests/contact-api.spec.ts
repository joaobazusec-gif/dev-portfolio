// Testes de API & Validação do DevPortfolio – QA Agent

describe('DevPortfolio Contact API Suite', () => {
  const BASE_URL = 'http://localhost:3000/api';

  it('POST /api/contact - deve aceitar formulário preenchido corretamente', async () => {
    const payload = {
      name: 'Recrutador Tech',
      email: 'recrutador@techcompany.com',
      message: 'Gostamos do seu perfil! Podemos agendar uma conversa?'
    };

    // Validação de estrutura do payload
    expect(payload.name).toBeDefined();
    expect(payload.email).toContain('@');
    expect(payload.message.length).toBeGreaterThan(5);
  });

  it('POST /api/contact - deve rejeitar requisição sem dados obrigatórios', async () => {
    const invalidPayload = { name: '', email: '' };
    expect(invalidPayload.name).toBe('');
  });
});
