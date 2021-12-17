import TextInput from '../TextInput'
import Illustration from '../Illustration'
import Form from '../Form'
import Checkbox from '../Checkbox'
import Button from '../Button'
import styles from '../../Styles/Signup.module.css'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            
            <div className="column">
                <Illustration />
                <Form className={`${styles.signup}`}>
                    <TextInput type="text" placeholder="ENter name" icon= "person" />


         

                      <TextInput type="text"
                      placeholder="Enter Email"    
                      icon="alternate_email" />



                      <TextInput type="password"
                      placeholder="Enter Password" 
                      icon="lock"/>

                    <TextInput type="password" placeholder="Confirm Password" 
                        icon="lock_clock"/>
                <Checkbox text="I agree to the term and conditions"/>
            
                <Button><span>Submit Now</span></Button>

                <div className="info">
                    Already have an account? 
                    <Link to="/login">Login</Link>
                     instead.
                </div>


                </Form>
            
            </div>
        </>
    )
}

export default Signup













