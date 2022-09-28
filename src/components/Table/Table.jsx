import "./Table.css"

export const Table = ({ words }) => {
    console.log(words);
    return (
        <div>
            <table className="table">
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
                        words.map(({ word_py, word_en, word_es }, _id) => {
                            return (
                                <tr>
                                    <th scope="row">{_id + 1}</th>
                                    <td>{word_es}</td>
                                    <td>{word_py}</td>
                                    <td>{word_en}</td>
                                </tr>)

                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
