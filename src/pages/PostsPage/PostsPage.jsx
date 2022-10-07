import "./PostPage.css";
import { useEffect, useState, useContext } from "react";
import PostAxios from "../../services/postAxios";
import { AuthContext } from '../../context/auth.context';
import { useNavigate, useParams } from "react-router-dom";

const PostsPage = () => {
    const { user } = useContext(AuthContext);

    const [post, setPost] = useState([]);

    const postAxios = new PostAxios();

    const navigate = new useNavigate();

    const routeChange = (id) => {

        navigate(`/edit_post/${id}`);
    }

    const routeToPost = (id) => {

        navigate(`/post/${id}`);
    }

    const toPost = (id) => {

        navigate(`/post/${id}`);
    }

    const deletePost = (id) => {
        postAxios
            .deleteWord(id)
            .then(() => {
                navigate(0)
            })
    }

    useEffect(() => {

        postAxios
            .getAllPosts()
            .then(posts => {

                console.log(posts)
                setPost(posts)
            })

            .catch(err => console.log(err))



    }, []);


    return (
        <div className="container ">
            <div className="row mb-2">

                {/* <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"> */}
                {
                    post.map(({ title, description, author, comments, _id }) => {
                        return (
                            <div className="col-6 p-4 d-flex flex-column position-static bg-secondary text-white mt-4" key={_id}>
                                <h2>Usuario: {author?.username}</h2>
                                <strong className="d-inline-block mb-2 text-primary text-left">{title}</strong>
                                <p className="card-text mb-auto text-left">{description}</p>
                                {console.log(author)}
                                {user?._id === author?._id ? <button onClick={() => routeChange(_id)}>Edit</button> : null}
                                {user?._id === author?._id ? <button onClick={() => deletePost(_id)}>Delete</button> : null
                                }
                                < button onClick={() => toPost(_id)}>to post</button>

                            </div>)


                    })
                }

                {/* </div> */}


            </div>
        </div >
    )
}

export default PostsPage