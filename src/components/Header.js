import React from 'react';
import {useHistory} from 'react-router-dom'

const Header = (props) => {
    const history = useHistory()

    const {currentUser, onLogout} = props

    const logoutHandler = () => {
        onLogout()
        history.push('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark stick-top">
            <a className="navbar-brand mx-4" href="/">AniRec</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/anime">Anime</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/reviews">Reviews</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/snippets">Snippets</a>
                    </li>
                </ul>
            </div>

            <ul className="navbar-nav mx-3">
                {
                    currentUser === null ? (
                    <>
                        <li className="nav-item active">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                    </>
                    ) : (
                    <>
                        <li className="nav-item active">
                            <a className="nav-link" href="/profile">Account</a>
                        </li>
                        <li className="nav-item active">
                            <a href="#" onClick={logoutHandler} className="nav-link">Logout</a>
                        </li>
                    </>
                    )
                }
            </ul>
        </nav>
    )
};

export default Header;
