import React from 'react'
import Nav from './Nav'
import styles from '../Styles/Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div>
            <main className={styles.main}>
                <div className={styles.container}>
                    {children}

                </div>

            </main>
        </div>
        </>
    )
}

export default Layout
