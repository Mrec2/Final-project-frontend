import "./LoginPage.css";
import FormLogin from '../../components/FormUser/FormLogin'
import { useState, useContext } from "react";
import authAxios from "../../services/authAxios";
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { storeToken, authentication } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState("")
    console.log(user);

    const loginUser = (e) => {
        e.preventDefault()
        console.log(e)
        authAxios.login(user).then((response) => {
            console.log(response)
            storeToken(response.token)
            authentication();
            navigate('/dict_list');
        })
    }

    const updateUser = ({ target }) => {
        const { name, value } = target;
        setUser({ ...user, [name]: value });

    }

    return (
        <div>

            <FormLogin loginUser={loginUser} updateUser={updateUser} />

        </div>
    )
}

export default LoginPage




