import InitAxios from "./initAxios";

class PostAxios extends InitAxios {
    constructor() {
        super('post')
    }

    getAllPosts() {
        return this.axios.get(`/getallposts`).then((response) => response.data)
    }

    getOnePostById(id) {
        return this.axios.get(`/getpost/${id}`).then((response) => response.data);
    }

    createPost(body) {
        return this.axios.post('/createpost', body, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('tokenAuth')}`
            }
        }).then((response) => response.data);
    }

    updatePost(id, body) {
        return this.axios.put(`/updatepost/${id}`, body).then((response) => response.data);
    }

    deleteWord(id) {
        return this.axios.delete(`/deletepost/${id}`).then((response) => response.data);
    }
}

export default PostAxios;