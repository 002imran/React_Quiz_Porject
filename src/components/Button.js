import React from 'react'
import Styles from '../Styles/Button.module.css'

const Button = ({className, children}) => {
    return (
        <div className={`${Styles.button} ${className}`}>
             {children}  
            
        </div>
    )
}

export default Button
