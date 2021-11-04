import axios from 'axios'
const api = axios.create({
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
}
    
    