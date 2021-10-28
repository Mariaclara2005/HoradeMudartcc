import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

const app = express();
app.use(cors());
app.use(express.json());

app.post('/cadastro',async (req,resp) => {
    try {
        let usuParam = req.body;

        let u = await db.tb_infob_hdm_cadastro.findOne({ where: { nm_HDM_nome: usuParam.nome } });
        if (u != null)
            return resp.send({ erro: 'Usuário já existe!' });
        
        let r = await db.tb_infob_hdm_cadastro.create({
            nm_HDM_nome: usuParam.nome,
            nm_HDM_sobrenome: usuParam.sobrenome,
            dt_HDM_data_nascimento: usuParam.data,
            nr_HDM_celular: usuParam.celular,
            nm_HdM_email: usuParam.email,
            
            ds_login: usuParam.login,
            ds_senha: crypto.SHA256(usuParam.senha).toString(crypto.enc.Base64),
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.get('/usuario', async (req, resp) => {
    try {
        let usuarios = await db.tb_usuario.findAll();
        resp.send(usuarios);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})





app.listen(process.env.PORT,

x => console.log(`Server up at port ${process.env.PORT}`))