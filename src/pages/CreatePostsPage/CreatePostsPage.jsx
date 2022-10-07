import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import PostAxios from "../../services/postAxios";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";




const CreatePostsPage = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const postAxios = new PostAxios();

    const createPost = (eventHTML) => {
        eventHTML.preventDefault();
        console.log("estanis dentro de la funcion")
        console.log(eventHTML)
        postAxios
            .createPost(post)
            .then((response) => {
                console.log("El post ha sido creado", response);
                navigate("/posts")
            });

    };

    useEffect(() => {
        console.log(post)
    }, [post])


    const updatePost = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setPost({ ...post, [name]: value });
    };

    return (
        <div>


            <div className="createWord">
                <Form onSubmit={createPost}>

                    <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Title'
                            onChange={updatePost}
                            name='title'
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                        <Form.Label>Post</Form.Label>
                        <Form.Control
                            as="textarea" rows={3}
                            name='description'
                            placeholder="Post"
                            onChange={updatePost}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Post
                    </Button>
                </Form>
            </div>


        </div>
    )
}

export default CreatePostsPage