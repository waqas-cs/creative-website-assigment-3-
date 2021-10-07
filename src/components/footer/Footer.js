import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className="container">
                <div className={styles.footerWrap}>
                    <div className={styles.copyright}>
                        Copyrights © 2021 <span>Urraan.</span> All Rights Reserved. 
                        A CSR Project of <span>Codematics Inc.</span> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
