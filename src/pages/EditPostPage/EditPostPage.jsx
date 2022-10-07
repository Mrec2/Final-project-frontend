import "./EditPostPage.css";
import PostAxios from "../../services/postAxios";
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const EditPostPage = () => {

    const EditService = new PostAxios()


    const { id } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        EditService
            .getOnePostById(id)
            .then(singlePost => setPost(singlePost))
            .catch(err => console.log(err))

    }, [])
    console.log(post)



    const updateCurrentPost = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setPost({ ...post, [name]: value });
    };

    const updateNewPost = (eventHTML) => {

        eventHTML.preventDefault();
        console.log('SALIO BIEN????')
        EditService
            .updatePost(id, post)
            .then((response) => {
                console.log("Updated post", response);
                navigate("/posts")
            });

    };

    return (


        <div className="createWord">
            <Form onSubmit={updateNewPost}>

                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Title'
                        onChange={updateCurrentPost}
                        name='title'
                        value={post.title || ""}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Post</Form.Label>
                    <Form.Control
                        as="textarea" rows={3}
                        name='description'
                        placeholder="Post"
                        onChange={updateCurrentPost}
                        value={post.description || ""}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Edit Post
                </Button>
            </Form>


        </div>
    )
}

export default EditPostPage

