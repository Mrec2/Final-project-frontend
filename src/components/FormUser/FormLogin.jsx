import { Form, Button } from "react-bootstrap";
import "./FormLogin.css";

const FormUser = ({ loginUser, updateUser }) => {

    return (
        <>
            {/* <Form onSubmit={loginUser}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='email@email.com'
                        onChange={updateUser}
                        name='email'
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        onChange={updateUser}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    entrar
                </Button>
            </Form> */}
            <div id="main-wrapper" className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme">Login</h3>
                                            </div>

                                            <h6 className="h5 mb-0">Welcome to GuaraDict!</h6>
                                            <p className="text-muted mt-2 mb-5">Enter your email and password to access your favourite words.</p>

                                            <form onSubmit={loginUser}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" onChange={updateUser} />
                                                </div>
                                                <div className="form-group mb-5">
                                                    <label htmlFor="exampleInputPassword1">Password</label>
                                                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={updateUser} />
                                                </div>
                                                <button type="submit" className="btn btn-theme" >Login</button>

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


                        <p className="text-muted text-center mt-3 mb-0">Don't have an account? <a href="/sign_up" className="text-primary ml-1">register</a></p>


                    </div>

                </div>

            </div>

        </>
    )
}

export default FormUser