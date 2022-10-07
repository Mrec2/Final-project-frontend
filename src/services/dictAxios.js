import InitAxios from "./initAxios";

class WordAxios extends InitAxios {
    constructor() {
        super('dict')
    }

    getAllWords() {
        return this.axios.get(`/words`).then((response) => response.data)
    }

    getOneWordById(id) {
        return this.axios.get(`/word/${id}`).then((response) => response.data);
    }

    createWord(body) {
        return this.axios.post('/addwords', body).then((response) => response.data);
    }

    updateWord(id, body) {
        return this.axios.put(`/${id}/edit`, body).then((response) => response.data);
    }

    deleteWord(id) {
        return this.axios.delete(`/${id}/delete`).then((response) => response.data);
    }
}

export default new WordAxios();