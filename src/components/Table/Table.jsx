import "./Table.css"
import { useNavigate, useParams } from "react-router-dom";

export const Table = ({ words, deleteWord }) => {
    console.log("que es esto" + deleteWord);



    const navigate = new useNavigate();
    const routeChange = (id) => {

        navigate(`/update_word/${id}`);
    }
    console.log(words);
    return (
        <div className="tableCont">
            <table className="table table-hover table-bordered border-primary">
                <thead>
                    <tr>
                        <th scope="col">nº</th>
                        <th scope="col">Palabra en español</th>
                        <th scope="col">Palabra en guaraní</th>
                        <th scope="col">Palabra en inglés</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        words.map(({ word_py, word_en, word_es, _id }, index) => {
                            return (
                                <tr key={_id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{word_es}</td>
                                    <td>{word_py}</td>
                                    <td>{word_en}</td>
                                    <button onClick={() => routeChange(_id)}>Edit</button>
                                    <button onClick={() => deleteWord(_id)}>Delete</button>
                                </tr>)


                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
