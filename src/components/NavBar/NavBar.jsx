import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg color-nav py-3 bg-info">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sign_up">Sign Up</a>
                            </li>




                            <li className="nav-item">
                                <a className="nav-link" href="/dict_list">Words</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user_home">User</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/create_word">create word</a>
                            </li>

                        </ul>
                    </div>


                </div>
            </nav>

        </div>

    )
}

export default NavBar;