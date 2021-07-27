import React, { useState } from 'react';

const Header = () => {
    const [currentUser, setCurrentUser] = useState({});

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark stick-top">
            <a className="navbar-brand mx-4" href="/">AniRec</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a className="nav-link" href="/anime">Anime</a>
                    </li>
                    <li class="nav-item active">
                        <a className="nav-link" href="/reviews">Reviews</a>
                    </li>
                    <li class="nav-item active">
                        <a className="nav-link" href="/snippets">Snippets</a>
                    </li>
                </ul>
            </div>

            <ul className="navbar-nav mx-3">
                {
                    Object.keys(currentUser).length === 0 ? (
                    <>
                        <li class="nav-item active">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item active">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                    </>
                    ) : (
                    <li class="nav-item active">
                        <a className="nav-link" href={`/users/${currentUser.userName}`}>Account</a>
                    </li>
                    )
                }
            </ul>
        </nav>
    )
};

export default Header;
