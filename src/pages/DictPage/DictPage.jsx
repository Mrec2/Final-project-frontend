import { useEffect, useState } from "react";
import WordAxios from "../../services/dictAxios";
import "./DictPage.css"
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "../../components/Table/Table";


const DictPage = () => {

    const [wordList, setWordList] = useState([]);
    const navigate = new useNavigate();

    const deleteWord = (id) => {

        WordAxios

            .deleteWord(id)
            .then(() => {
                navigate(0)
            })
    }





    useEffect(() => {

        WordAxios
            .getAllWords()
            .then(words => setWordList(words))
            .catch(err => console.log(err))


    }, []);


    return (
        <div className="dictPage">
            {
            }
            <Table words={wordList} deleteWord={deleteWord} />
        </div>
    )
}



export default DictPage