import React from 'react'
import styles from '../Styles/Illustration.module.css'
import signupImage from '../images/signup.svg'

const Illustration = () => {
    return (
        <div className={styles.illustration}>
            <img src={signupImage} alt="Signup" />

            
        </div>
    )
}

export default Illustration
