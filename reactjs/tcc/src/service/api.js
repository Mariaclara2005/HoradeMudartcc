import axios from 'axios'


const api = axios.create({
    baseURL: "https://horademudar.herokuapp.com/"
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
        let r = await api.post(`/login`, {email: email, senha: senha});
        return r.data
    }


}
    
  
