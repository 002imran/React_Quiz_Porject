import React from 'react'
import Checkbox from './Checkbox'
import styles from '../Styles/Answers.module.css'

const Answers = () => {
    return (
        <div className={styles.answers}>

            <Checkbox className={styles.answer} 
            text="Test answer"/>
            
        </div>
    )
}

export default Answers
