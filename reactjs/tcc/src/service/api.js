import axios from 'axios'


const api = axios.create({
    baseURL: "https://horademudar.herokuapp.com/"
    
})

export default class Api {
    async listarMensagens(idSala) {
        let r = await api.get('/Chat');
        return r.data;
    }


    async listar () {
        let r = await api.get('/cadastro')
        return r.data
    }

    async inserir (nome, sobrenome, celular, email, senha ) {
        let r = await api.post('/cadastro', {nome, sobrenome, celular, email, senha })
        return r.data;
    }

    async login (email, senha) {
        let r = await api.post('/login', {email: email, senha: senha});
        return r.data
    }

    
    async listarMensagens() {
        let r = await api.get(`/Chat`);
        return r.data;
    }
    async inserirMensagem(texto) {
        let conversa = {
            texto: texto
        }
        let r = await api.post(`/Chat`, conversa);
        return r.data;
     }
     async removerMensagem(){
        let r = await api.delete(`/Chat`);
        return r.data;
    }
    
    async inserirMensagem(  nomeUsuario, mensagem) {
        let chat = {
            
            usuario: { 
                nome: nomeUsuario
            },
            mensagem: mensagem
        }
        let r = await api.post(`/Chat`, chat);
        return r.data;
    }


    }
    
  
