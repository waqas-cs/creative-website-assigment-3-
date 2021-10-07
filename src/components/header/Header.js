import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className={styles.headerMain}>
            <div className="container">
                <div className={styles.headerMainWrap}>
                    <div className={styles.logo}>
                        <img src={logo} className={styles.logoImage}/>
                    </div>
                    <div className={styles.navLinks}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Courses</li>
                            <li>Team</li>
                            <li>Contact</li>
                            <li></li>
                        </ul> 
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
