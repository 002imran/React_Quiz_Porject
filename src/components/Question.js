import React from 'react'
import Answers from './Answers'
import styles from '../Styles/Question.module.css'

const Question = () => {
    return (
         <div className={styles.question}>
             <div className={styles.qtitle}>
                 <span className='material-icons-outlined'>
                     help_outline

                 </span>
                 Here goes the question from our exam?

             </div>

             
             <Answers />

         </div>
    )
}

export default Question
