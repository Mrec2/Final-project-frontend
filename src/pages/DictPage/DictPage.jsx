import { useEffect, useState } from "react";
import DictAxios from "../../services/dictAxios";
import "./DictPage.css"


const DictPage = () => {

    const [wordList, setWordList] = useState([]);

    const dictAxios = new DictAxios();

    useEffect(() => {

        dictAxios
            .getAllWords()
            .then(words => setWordList(words))
            .catch(err => console.log(err))


    }, []);

    return (
        <div>
            {
                wordList.map(({ word_py, _id }) => {
                    return <p key={_id}>{word_py}</p>
                })
            }
        </div>
    )
}



export default DictPage