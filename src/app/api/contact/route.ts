import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Configurar transporter do nodemailer
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true para 465, false para outras portas
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar opções do email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'lgmarchioreh@gmail.com', // Seu email
      subject: `💼 Nova mensagem do portfólio - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5C63ED; border-bottom: 2px solid #5C63ED; padding-bottom: 10px;">
            📧 Nova mensagem do seu portfólio
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #212529; margin-top: 0;">Informações do contato:</h3>
            <p><strong>👤 Nome:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #212529; margin-top: 0;">💬 Mensagem:</h3>
            <p style="line-height: 1.6; color: #495057;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px; border-left: 4px solid #5C63ED;">
            <p style="margin: 0; font-size: 14px; color: #495057;">
              <strong>🤖 Enviado automaticamente via</strong> portfolio Next.js
            </p>
          </div>
        </div>
      `,
      // Email de resposta para o remetente
      replyTo: email,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Erro ao enviar email:', error);
    
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor. Tente novamente mais tarde.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Método OPTIONS para CORS (se necessário)
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}