import db from './db.js';
import express from 'express'
import cors from 'cors'
import crypto from 'crypto-js'
const app = express();
app.use(cors());
app.use(express.json());

app.post('/cadastro', async (req, resp) => {
    try {
        let usuParam = req.body;

        let u = await db.infob_hdm_cadastro.findOne({ where: { nm_HDM_email: usuParam.email } });
        if (u != null)
            return resp.send({ erro: 'Usuário já existe!' });

        if (usuParam.nome == '')
            return resp.send({ erro: 'Nome é obrigatório' })

        if (usuParam.sobrenome == '')
            return resp.send({ erro: 'Sobrenome é obrigatório' })

        if (usuParam.celular == '')
            return resp.send({ erro: 'Celular é obrigatório' })

        if (usuParam.email == '')
            return resp.send({ erro: 'Email é obrigatório' })

        if (usuParam.senha == '')
            return resp.send({ erro: 'Senha é obrigatório' })




        let r = await db.infob_hdm_cadastro.create({
            nm_HDM_nome: usuParam.nome,
            nm_HDM_sobrenome: usuParam.sobrenome,
            nr_HDM_celular: usuParam.celular,
            nm_HDM_email: usuParam.email,
            nm_HDM_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)

        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.get('/cadastro', async (req, resp) => {
    try {
        let usuarios = await db.infob_hdm_cadastro.findAll();
        resp.send(usuarios);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/login', async (req, resp) => {
    try {
        const nome = req.body.email;
        const senha = req.body.senha;

        const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64)

        let r = await db.infob_hdm_cadastro.findOne(
            {
                where: {
                    nm_HDM_email: nome,
                    nm_HDM_senha: cryptoSenha
                },
                raw: true
            })

        console.log(r);

        if (r == null)
            return resp.send({ erro: 'Credenciais inválidas!' });

        resp.sendStatus(200);
    } catch (e) {
        console.log(e);
        resp.send({ erro: 'Ocorreu um erro ao realizar o login.' })
    }
})

app.get('/login', async (req, resp) => {
    try {
        let login = await db.infob_hdm_login.findAll();
        resp.send(login);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.post('/login_adm', async (req, resp) => {
    const email_empresa = req.body.email_empresa;
    const senha = req.body.senha;

    const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64)

    let r = await db.infob_hdm_login.findAll(
        {
            where: {
                nm_HDM_nome: email_empresa,
                nr_senha: cryptoSenha
            },
            raw: true
        })


    if (r == null)
        return resp.send({ erro: e.toString() });

    resp.sendStatus(200);
});

app.get('/login_adm', async (req, resp) => {
    try {
        let login = await db.infob_hdm_login_adm.findAll();
        resp.send(login);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


// app.post('/cadastro_adm',async (req,resp) => {
//     try {
//         let usuParam = req.body;

//         let u = await db.infob_hdm_cadastro_adm.findOne({ where: { nm_HDM_email_empresa: usuParam.email_empresa } });
//         if (u != null)
//             return resp.send({ erro: 'Usuário já existe!' });

//         let r = await db.infob_hdm_cadastro_adm.create({
//             nm_HDM_nome: usuParam.nome,
//             nm_HDM_sobrenome: usuParam.sobrenome,
//             nr_HDM_celular: usuParam.celular,
//             nm_HDM_email_empresa: usuParam.email_empresa,
//             nm_HDM_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64)


//         })
//         resp.send(r);

//     })
//     resp.send(r);
// } catch (e) {
//         resp.send({ erro: e.toString()})
//     }
// })

app.post('/chat', async (req, resp) => {
    try {
        let login = await db.infob_hdm_login_adm.findAll();
        resp.send(login);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})



app.get('/cadastro_adm', async (req, resp) => {
    try {
        let cadastro_adm = await db.infob_hdm_cadastro_adm.findAll();
        resp.send(cadastro_adm);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})







<<<<<<< HEAD
app.post('/esqueciASenha', async (req, resp) =>{
    const usuarios = await db.infob_hdm_usuario.findOne({
        where:{
            ds_email: req.body.emaiil
        }
    });

    if (!usuarios) {
            resp.send({status: 'Erro', mensagem: 'E-mail inválido.'});
        }
    
        let codigo = getRudInteger (1000, 9999);
        await db.infob_hdm_usuario.update({
            ds_codigo_rec: codigo
         }, {
             where: {id_HDM_usuario: usuario.id_HDM_usuario}
         })
            enviarEmail(usuario.nm_HDM_email, 'Recuperação De Senha', `
            <h3> Recuperação de senha </h3>
            <p> Sua recuperação de senha da sua conta foi atendida 
            <p> insira esse código ${codigo} para recuper sua conta
            
            `) 
            resp.send({ status: 'Código Enviado'});
        })

=======
// app.post('/esqueciASenha', async (req, resp) =>{
//     const usuarios = await db.infob_hdm_usuario.findOne({
//         where:{
//             ds_email: req.body.emaiil
//         }
//     });

//     if (!usuarios) {
//             resp.send({status: 'Erro', mensagem: 'E-mail inválido.'});
//         }

//         let codigo = getRudInteger (1000, 9999);
//         await db.infob_hdm_usuario.update({

//         }, {
//             where: { id_usuario: user.id_usuario}
//         })


// } )
>>>>>>> da80f4654744f984154a241d5a882beb79dafab0


// app.post('/validarCodigo', async (req, resp) =>{

// } )


// app.put('/resetSenha', async (req, resp) =>{

// } )


// function getRudInteger(min, max){
//     return Math.floor(Math.random() * (max - min) ) + min;
// }




app.listen(process.env.PORT, () => console.log(`Server up at port ${process.env.PORT}`))