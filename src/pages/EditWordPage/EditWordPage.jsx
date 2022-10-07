import "./EditWordPage.css";
import WordAxios from "../../services/dictAxios";
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const EditWordPage = () => {


    const { id } = useParams();
    const [word, setWord] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        WordAxios
            .getOneWordById(id)
            .then(singleWord => setWord(singleWord))
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        console.log(word)
    }, [word])

    const updateCurrentWord = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setWord({ ...word, [name]: value });
    };

    const updateNewWord = (eventHTML) => {

        eventHTML.preventDefault();
        WordAxios
            .updateWord(id, word)
            .then((response) => {
                console.log("Updated word", response);
                navigate("/dict_list")
            });

    };

    return (

        <div className="createWord">
            <Form onSubmit={updateNewWord}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>palabra en español</Form.Label>
                    <Form.Control
                        name='word_es'
                        onChange={updateCurrentWord}
                        type='text'
                        placeholder='palabra en español'
                        value={word.word_es || ""}

                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>palabra en guaraní</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='palabra en guaraní'
                        onChange={updateCurrentWord}
                        name='word_py'
                        value={word.word_py || ""}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Palabra en inglés</Form.Label>
                    <Form.Control
                        type='text'
                        name='word_en'
                        placeholder="Palabra en inglés"
                        onChange={updateCurrentWord}
                        value={word.word_en || ""}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Edit word
                </Button>

            </Form>
        </div>
    )
}

export default EditWordPage

