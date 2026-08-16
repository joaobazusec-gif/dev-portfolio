import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios ausentes' },
        { status: 400 }
      );
    }

    console.log(`📩 Nova mensagem de contato recebida no DevPortfolio:`, {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Mensagem recebida com sucesso!',
      data: { name, email },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar mensagem de contato' },
      { status: 500 }
    );
  }
}
