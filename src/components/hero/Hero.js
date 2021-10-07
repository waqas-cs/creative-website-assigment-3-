import React, {useEffect} from 'react'
import styles from './Hero.module.css'
import heroImage from '../../assets/images/heroImage.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = () => {

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, [])

    return (
        <div className={styles.hero}>
            <div className="container">
                <div data-aos="fade-down" className={styles.heroWrap}>
                    <div className={styles.heroImage}>
                        <img src={heroImage}/>
                    </div>
                    <div className={styles.heroContent}>
                        <h1>Runway To <br/><span>Digital Flight</span></h1>
                        <button className={styles.applyButton}>Apply Now</button>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default Hero
