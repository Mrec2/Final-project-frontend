import { useEffect, useState } from "react";
import DictAxios from "../../services/dictAxios";
import "./DictPage.css"
import { Table } from "../../components/Table/Table";


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
        <div className="dictPage">
            {

                <Table words={wordList} />
                // wordList.map(({ word_py, _id }) => {
                //     return <p key={_id}>{word_py}</p>
                // })
            }
        </div>
    )
}



export default DictPage