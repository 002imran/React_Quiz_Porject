import React from 'react'
import Question from './Question'
import styles from '../Styles/Analaysis.module.css'

const Analaysis = () => {
    return (
        <div className={styles.analysis}>
            <h1>Question Analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>
            
            <Question />
            
        </div>
    )
}

export default Analaysis
