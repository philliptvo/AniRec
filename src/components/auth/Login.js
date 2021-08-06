import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {ACCESS_TOKEN} from '../../utils/constants'
import userService from '../../services/user.service'

const Login = ({onLogin}) => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        userNameOrEmail: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setCredentials({
            ...credentials,
            [name] : value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        userService.loginUser(credentials)
            .then(res => {
                localStorage.setItem(ACCESS_TOKEN, res.accessToken)
                onLogin()
            }).catch (err => {
                console.log(err)
            })
    }

    return(
        <div className="container w-50">
            <h1>Login</h1>
            <br/>

            <form onSubmit={(e) => onSubmitHandler(e)}>
                <label htmlFor="userNameOrEmail" className="col-form-label">Username or Email</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={credentials.userNameOrEmail}
                        type="text" name="userNameOrEmail" id="userNameOrEmail" className="form-control"
                        placeholder="Your username or email address"
                        required />
                </div>
                <br/>

                <label htmlFor="password" className="col-form-label">Password</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={credentials.password}
                        rows={5}
                        name="password" id="password" className="form-control"
                        type="password" required />
                </div>
                <br/>

                <button type="submit" className="btn btn-primary col-sm-12">Login</button>
            </form>
        </div>
    )
}

export default Login
