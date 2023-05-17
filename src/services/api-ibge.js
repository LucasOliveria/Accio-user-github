import axios from "axios";


export default axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades',
    timeout: 10000,
    headers: { 'content-type': 'application/json' }
});