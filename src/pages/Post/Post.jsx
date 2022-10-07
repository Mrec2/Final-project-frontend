import React from 'react'
import PostAxios from "../../services/postAxios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        const obtainPost = new PostAxios();
        obtainPost
            .getOnePostById(id)
            .then(singlePost => {
                console.log("singlepoast", singlePost)
                setPost(singlePost)
            })
            .catch(err => console.log(err))

    }, [])
    console.log("es esto un ARRAY?", post);

    return (<div>
        <div className="row mb-2">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    {
                        post.map(({ title, description, author, comments, _id }) => {
                            return (
                                <div className="col p-4 d-flex flex-column position-static" key={_id}>
                                    <h2>{author?.username}</h2>
                                    <strong className="d-inline-block mb-2 text-primary">{title}</strong>
                                    <p className="card-text mb-auto">{description}</p>

                                    <p>{comments.comment}</p>


                                </div>)


                        })
                    }

                </div>
            </div>

        </div>
    </div>
    )
}

export default Post