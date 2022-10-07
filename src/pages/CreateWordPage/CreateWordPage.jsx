import "./CreateWordPage.css";
import WordAxios from "../../services/dictAxios";
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const CreateWordPage = () => {


    const navigate = new useNavigate();
    const [word, setWord] = useState({});

    const createNewWord = (eventHTML) => {
        eventHTML.preventDefault();
        console.log(eventHTML)
        WordAxios
            .createWord(word)
            .then((response) => {
                console.log("LA RESPUESTA AHORA SÍ DESDE MI SERVICIO", response);
                navigate("/dict_list")
            });

    };

    useEffect(() => {
        console.log(word)
    }, [word])


    const updateNewWord = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setWord({ ...word, [name]: value });
    };

    return (

        <div className="createWord">
            <Form onSubmit={createNewWord}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>palabra en español</Form.Label>
                    <Form.Control
                        name='word_es'
                        onChange={updateNewWord}
                        type='text'
                        placeholder='palabra en español'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>palabra en guaraní</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='palabra en guaraní'
                        onChange={updateNewWord}
                        name='word_py'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Palabra en inglés</Form.Label>
                    <Form.Control
                        type='text'
                        name='word_en'
                        placeholder="Palabra en inglés"
                        onChange={updateNewWord}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Registrar palabra
                </Button>
            </Form>
        </div>
    )
}

export default CreateWordPage

