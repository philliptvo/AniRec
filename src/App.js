import React, {useEffect, useState} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';

import {ACCESS_TOKEN} from "./utils/constants"
import userService from './services/user.service'

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/Header.js'
import Home from './components/Home.js'
import Anime from './routes/anime'
import Review from './components/review/ReviewCard';
import Snippets from './routes/snippets';

function App () {
    const [currentUser, setCurrentUser] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const loadCurrentUser = () => {
        setLoading(true)
        userService.getCurrentUser()
            .then(res => {
                setCurrentUser(res)
                setAuthenticated(true)
                setLoading(false)
            }).catch(_ => {
                setLoading(false)
            })
    }

    const logoutHandler = () => {
        localStorage.removeItem(ACCESS_TOKEN);

        setCurrentUser(null)
        setAuthenticated(false)
    }

    const loginHandler = () => {
        loadCurrentUser()
    }

    useEffect(() => {
        loadCurrentUser()
    }, [])

    if (isLoading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }

    return (
        <div classname="page-container">
            <Header isAuthenticated={isAuthenticated} currentUser={currentUser} onLogout={logoutHandler} />
            <div classname="wrapper">
            <BrowserRouter>
                <div classname="content">
                    <Switch>
                        <Route path="/login" render={(props) => <Login onLogin={loginHandler} {...props} />}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/home" component={Home} />
                        <Route path="/anime" component={Anime} />
                        <Route path="/reviews" component={Review} />
                        <Route path="/snippets" component={Snippets} />
                    </Switch>
                </div>
            </BrowserRouter>
          </div>
        </div>
    );
}

export default App;
