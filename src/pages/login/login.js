import React, { useState } from 'react';
import st from './loginstyle.module.css'
import {Form , Button } from "react-bootstrap"
import {Link} from 'react-router-dom'
import Dashboard from '../dashboard/dashboard'
import {useHistory} from "react-router-dom"
const Login = () => {

    let history = useHistory();


    const [name , setName] = useState("");
    const [password , setPassword] = useState("");

    return(
        <div className={st.login}>
        <Form className= {st.login__form}>
        <h1>Login</h1>
        <Form.Group controlId="formBasicEmail">
             <Form.Label>Username</Form.Label>
             <Form.Control
                   type="name" 
                   placeholder="enter your username"
                   value = {name} 
                   onChange={(e) => setName(e.target.value)} />
             </Form.Group>

             <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control 
                    type= "password" 
                    placeholder= "enter your password" 
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}/>
             </Form.Group>
             <Link to= "/dashboard">
             <Button variant="primary" type="submit" className= "mt-4 btn__submit"
             
             onclick= {() =>{ history.push("/dashboard")}}>
                    Submit
             </Button></Link>
        </Form>
       
        </div>
    )
}
export default Login;