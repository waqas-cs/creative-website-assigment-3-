import React, {useEffect} from 'react'
import styles from './Mentors.module.css'
import waqasPhoto from '../../assets/images/waqas.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Mentors = () => {

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, [])

    return (
        <div className={styles.mentrosMain}>
            <div className="container">
                <div className={styles.mentorMainWrap}>
                    <h3>Leads & Mentors</h3>
                    <p>
                        Here is the team of leads and mentors of URRAAN who volunteer and 
                        give time from their busy schedules. URRAAN is functioning today because 
                        of their dedication, hard work, focus, and devotion and we are truly 
                        blessed to have such amazing Team Members.
                    </p>
                    <div className={styles.mentorCards}>
                        <div data-aos="flip-right" className={styles.metorCard}>
                            <img src={waqasPhoto} className={styles.waqasPhoto}/>
                            <h5>Hammad Imran</h5>
                            <h6>React Developer</h6>
                        </div>
                        <div data-aos="flip-right" className={styles.metorCard}>
                            <img src={waqasPhoto} className={styles.waqasPhoto}/>
                            <h5>Waqas Ali</h5>
                            <h6>React Developer</h6>
                        </div>
                        <div data-aos="flip-right" className={styles.metorCard}>
                            <img src={waqasPhoto} className={styles.waqasPhoto}/>
                            <h5>M Arsalan</h5>
                            <h6>React Developer</h6>
                        </div>
                        <div data-aos="flip-right" className={styles.metorCard}>
                            <img src={waqasPhoto} className={styles.waqasPhoto}/>
                            <h5>Sheraz</h5>
                            <h6>React Developer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors
