import React from 'react'
import styles from '../Styles/MiniPlayer.module.css'
import Img from '../images/3.jpg'

const MiniPlayer = () => { 
    return (
         <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
          <span className={`material-icons-outlined ${styles.open}`}>
              {" "}
               play_circle_filled{" "} </span>
          <span className={`material-icons-outlined ${styles.close}`}> {" "}
           close{" "} </span>
          <img src={Img} alt="Alt Tag" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    )
}

export default MiniPlayer
