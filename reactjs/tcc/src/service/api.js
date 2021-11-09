import axios from 'axios'


const api = axios.create({
    //baseURL: "https://horademudar.herokuapp.com/"
    baseURL: "http://localhost:3030/"
})

export default class Api {

    async listar () {
        let r = await api.get('/cadastro')
        return r.data
    }

    async inserir (nome, sobrenome, celular, email, senha ) {
        let r = await api.post('/cadastro', {nome, sobrenome, celular, email, senha })
        return r.data;
    }

    async Login (email, senha) {
        let r = await api.post('/login', {email: email, senha: senha});
        return r.data
    }

    async inserirUsuario(nome) {
        let r = await api.post(`/cadastro/`, { nome: nome });
        return r.data;
    }

}
    
  
