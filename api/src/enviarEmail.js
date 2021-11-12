import nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 587,
  secure: false,
  auth: {
    user: 'Horademudarnsf@gmail.com',
    pass: 'horademudar123',
  },
});


async function enviarEmail(para, assunto, mensagem) {
    const response = await sender.sendMail({
      from: 'Hora De Mudar" <Horademudarnsf@gmail.com>',
      to: para, 
      subject: assunto,
      html: mensagem
    })
    return response;
  }


  export default enviarEmail;
