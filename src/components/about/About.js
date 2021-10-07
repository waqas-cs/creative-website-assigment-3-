import React, {useEffect} from 'react'
import styles from './About.module.css'
import aboutImage from '../../assets/images/about.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, [])
    
    return (
        <div className={styles.aboutMain}>
            <div className="container">
                <div className={styles.aboutWrap}>
                    <div data-aos="fade-right" className={styles.aboutImage}>
                        <img src={aboutImage}/>
                    </div>
                    <div className={styles.aboutContent}>
                        <h2>About Urraan</h2>
                        <p>
                            URRAAN is a CSR (Corporate Social Responsibility) project of CODEMATICS Services 
                            Pvt. Ltd. It was launched with the aim to empower our youth by providing them the 
                            right platform to learn necessary digital skills, so that they can play a 
                            positive role in the digital economy of Pakistan.
                            <br/><br/>
                            CODEMATICS is currently one of the fastest – growing IT companies in the 
                            country with its products being used by over 100 million users around the 
                            world. Also, they are in Strategic Partnership with Google Inc. 
                            in the Asia Pacific region.
                            <br/><br/>
                            URRAAN provides free of cost hands-on training in a wide range of 
                            digital skills within Abbottabad city from Monday to Friday, 9am to 5 pm. 
                            The success rate of URRAAN is more than 70%, which means that majority 
                            of our candidates either start freelancing, get jobs locally, or initiate 
                            their own start-ups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
