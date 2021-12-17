import { Link } from "react-router-dom"
import React from 'react'
import Account from './Account'
import styles from '../Styles/Nav.module.css';
import logo from '../images/logo-bg.png'

const Nav = () => {
    return (
         <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" href="index.html" className={styles.brand}>
            <img src={logo} alt="Lets Learn" />
            <h3>Learing Platform</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>

    )
}

export default Nav
