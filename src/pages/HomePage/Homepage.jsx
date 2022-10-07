
import "./Homepage.css";
// import Search from "../../components/search/Search";
import TextField from "@mui/material/TextField";
// import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
// import { Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import WordAxios from "../../services/dictAxios";
import List from "../../components/ListSearch/ListSearch";
import Form from 'react-bootstrap/Form';
import espana from "./espana.webp";
import paraguay from "./paraguay.gif";
import uk from "./uk.webp"



export const Homepage = () => {



    const [wordList, setWordList] = useState([]);

    const [words, setWords] = useState(wordList);

    const [lan, setLan] = useState('word_en');

    // crea un estado con un idioma con defecto.



    useEffect(() => {

        WordAxios
            .getAllWords()
            .then(allWords => {
                setWordList(allWords);
                setWords(allWords);
            })
            .catch(err => console.log(err))


    }, []);

    // Para el cambio de idioma se tendra que crear una función que cambie un estado que indique el idioma

    const lanState = (e) => {

        const { value } = e.target;
        console.log(value);
        setLan(value);


    }






    const handleSearch = (e) => {
        const search = e.target.value;
        console.log(wordList)
        const filteredWords = wordList.filter((word) => {
            return word[lan].toLowerCase().includes(search.toLowerCase());
        });
        setWords(filteredWords);
        // setProducts(products);
    };

    // crea una función para filtrado
    // filter (wordList) y lo que devuelve filter tendrá que actualizar `words`



    return (
        <>

            <nav className="navbar navbar-default navbar-inverse d-flex justify-content-center mt-4">
                <form className="navbar-form navbar-right" role="search">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
                    </div>
                </form>
            </nav>



            {/* <div className="main">
                <h1>Search a word</h1>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                        onChange={handleSearch}
                    />
                </div> */}

            <div className="selectContainer">
                <Form.Select onChange={lanState} aria-label="Default select example">

                    <option value="word_en">From english</option>
                    <option value="word_es">From spanish</option>
                    <option value="word_py">From guaraní</option>
                </Form.Select>
            </div>
            <div className="flags mt-4">
                <img src={espana} alt="spain" />
                <img src={paraguay} alt="Paraguay" />
                <img src={uk} alt="uk" />
            </div>
            <div className="mt-4">
                <List words={words} lan={lan} />
            </div>





        </>
    )
}

export default Homepage