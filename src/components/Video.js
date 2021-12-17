import React from 'react'
import styles from '../Styles/Video.module.css'
import image from '../images/3.jpg';

const Video = () => {
    return (
         <a href="quiz.html"
            ><div className ={styles.video}>
              <img src={image} alt="Video title" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className ={styles.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
    )
}

export default Video
