import React from 'react'
import TextInput from '../TextInput'
import Form from '../Form'
import Illustration from '../Illustration'
import styles from '../../Styles/Login.module.css'
import Button from '../Button'
import { Link } from 'react-router-dom'
 const Login = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className='column'>
                <Illustration />
                <Form className={`${styles.login}`}>
                    <TextInput 
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />

                      <TextInput 
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />

                    <Button><span>Submit Now</span> </Button>
                    <div className='info'>
                        Don't Have an account? <Link to="/signup" >Signup</Link> instead.

                    </div>

                </Form>
            </div>
        </>
    )
}

export default Login;