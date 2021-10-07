import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
            <div className={styles.contactMain}>
                <div className="container">
                    <div className={styles.contactMainWrap}>
                        <h2>Contact</h2>
                        <div className={styles.formMap}>
                            <div className={styles.formDiv}>
                                <form className={styles.form}>
                                    <input type="text" name="name" placeholder=" Name"/>
                                    <input type="text" name="email" placeholder=" Email Address"/>
                                    <textarea name="message" placeholder=" Message"/> <br/>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact
