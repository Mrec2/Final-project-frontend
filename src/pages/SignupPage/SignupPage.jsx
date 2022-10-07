// import FormUser from "../components/FormUser/FormUser"
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
// import { Button, Form } from 'react-bootstrap';
import authAxios from '../../services/authAxios';
import "./SignupPage.css";
import { useNavigate } from "react-router-dom";



const SignupPage = () => {

    const { user } = useContext(AuthContext);
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();


    const createNewUser = (eventHTML) => {
        eventHTML.preventDefault();
        authAxios
            .registro(newUser)
            .then((response) => {

                console.log("QUE VIENE aqui", response);
                navigate("/login");
            });
    };

    // useEffect(() => {
    //     console.log(newUser)
    // }, [newUser])


    const updateNewUser = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewUser({ ...newUser, [name]: value });
    };

    return (
        // <Form onSubmit={createNewUser}>
        //     <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        //         <Form.Label>Username</Form.Label>
        //         <Form.Control
        //             name='username'
        //             onChange={updateNewUser}
        //             type='text'
        //             placeholder='nombre'
        //         />
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        //         <Form.Label>Email</Form.Label>
        //         <Form.Control
        //             type='text'
        //             placeholder='email@email.com'
        //             onChange={updateNewUser}
        //             name='email'
        //         />
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        //         <Form.Label>Contraseña</Form.Label>
        //         <Form.Control
        //             type='password'
        //             name='password'
        //             onChange={updateNewUser}
        //         />
        //     </Form.Group>
        //     <Button variant='primary' type='submit'>
        //         Registro
        //     </Button>
        // </Form>

        <>
            <div id="main-wrapper" className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme">Register</h3>
                                            </div>
                                            <h6 className="h5 mb-0">Just Do Register.</h6>
                                            <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Register.</p>
                                            <form onSubmit={createNewUser}>
                                                <div className="form-group">
                                                    <label htmlFor="yourName">Your name</label>
                                                    <input type="text" className="form-control" id="yourName" name='username' onChange={updateNewUser} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={updateNewUser} />
                                                </div>
                                                <div className="form-group mb-5">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={updateNewUser} />
                                                </div>
                                                <button type="submit" className="btn btn-theme">Register</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-inline-block">
                                        <div className="account-block rounded-right">
                                            <div className="overlay rounded-right"></div>
                                            <div className="account-testimonial">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <p className="text-muted text-center mt-3 mb-0">Already have an account? <a href="login" className="text-primary ml-1">login</a></p>

                    </div>

                </div>

            </div>
        </>


    );
};

export default SignupPage;