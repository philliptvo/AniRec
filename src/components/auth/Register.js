import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import userService from '../../services/user.service'

const Register = () => {
    const history = useHistory()
    const [newUser, setUser] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        dateOfBirth: '',
        password: '',
    })

    const onChangeHandler = (e) => {
        const {name, value} = e.target

        setUser({
            ...newUser,
            [name] : value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newData = JSON.parse(JSON.stringify(newUser))
        if (newData.dateOfBirth !== "") {
            const dob = new Date(newData.dateOfBirth)
            newData["dateOfBirth"] = [dob.getUTCFullYear(), dob.getUTCMonth() + 1, dob.getUTCDate()]
        }

        userService.registerUser(newUser)
            .then(res => {
                history.push('/login')
            }).catch(err => {
                console.log(err)
            })
    }

    return(
        <div className="container w-50">
            <h1>Register</h1>
            <br/>

            <form onSubmit={(e) => onSubmitHandler(e)}>
                <label htmlFor="userName" className="col-form-label">Username</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={newUser.userName}
                        type="text" name="userName" id="userName" className="form-control"
                        placeholder="Your display name"
                        required />
                </div>
                <br/>

                <label htmlFor="firstName" className="col-form-label">First Name</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={newUser.firstName}
                        type="text" name="firstName" id="firstName" className="form-control"
                        placeholder="Your first name"
                        required />
                </div>
                <br/>

                <label htmlFor="lastName" className="col-form-label">Last Name</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={newUser.lastName}
                        type="text" name="lastName" id="lastName" className="form-control"
                        placeholder="Your last name"
                        required />
                </div>
                <br/>

                <label htmlFor="email" className="col-form-label">Email</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={newUser.email}
                        type="text" name="email" id="email" className="form-control"
                        placeholder="Your email address"
                        required />
                </div>
                <br/>

                <label htmlFor="gender" className="col-form-label">Gender</label>
                <div>
                    <select onChange={(e) => onChangeHandler(e)}
                        value={newUser.gender}
                        className="form-control"
                        name="gender" id="gender">
                        <option value="NONBINARY">Non-binary</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <br/>

                <label htmlFor="dob" className="col-form-label">Date of Birth</label>
                <div>
                    <input
                        onChange={(e) => onChangeHandler(e)}
                           value={newUser.dateOfBirth}
                           className="form-control"
                           type="date" id="dob" name="dob"/>
                </div>
                <br/>

                <label htmlFor="role" className="col-form-label">Role</label>
                <div>
                    <select onChange={(e) => onChangeHandler(e)}
                        value={newUser.userType}
                        className="form-control"
                        name="role" id="role">
                        <option value="GENERAL">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <br/>

                <label htmlFor="password" className="col-form-label">Password</label>
                <div>
                    <input onChange={(e) => onChangeHandler(e)}
                        value={newUser.password}
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

export default Register
