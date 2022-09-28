import InitAxios from "./initAxios";

class WordAxios extends InitAxios {
    constructor() {
        super('dict')
    }

    getAllWords() {
        return this.axios.get(`/words`).then((response) => response.data)
    }

    getOneWordById(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    createWord(body) {
        return this.axios.post('/', body).then((response) => response.data);
    }

    updateWord(id, body) {
        return this.axios.put(`/${id}`, body).then((response) => response.data);
    }

    deleteWord(id) {
        return this.axios.delete(`/${id}`).then((response) => response.data);
    }
}

export default WordAxios;