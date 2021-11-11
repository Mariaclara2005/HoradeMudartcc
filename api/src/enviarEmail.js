import nodemailer from 'nodemailer'
const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'horademudarnsf@hotmail.com',
    pass: 'horademudar123',
  },
});


async function enviarEmail(para, assunto, mensagem) {
    const response = await sender.sendMail({
      from: '"Hora De Mudar" <horademudarnsf.com>',
      to: para, 
      subject: assunto,
      html: mensagem
    })
    return response;
  }


  export default enviarEmail;
