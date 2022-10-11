import axios from 'axios';

class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            //baseURL: `http://localhost:5005/${path}`
            baseURL: `https://guaradict.herokuapp.com/${path}`
        })
    }
}

export default InitAxios;