import React, {useEffect} from 'react'
import styles from './Aim.module.css'
import digiSkills from '../../assets/images/aimDigiSkills.png'
import bridgingGap from '../../assets/images/aimBridgeGap.png'
import Incubating from '../../assets/images/AimIncubating.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const Aim = () => {

    useEffect(()=>{
        Aos.init({ duration: 1000});
    }, [])

    return (
        <div className={styles.aimMain}>
            <div className="container">
                <div className={styles.aimWrap}>
                    <h2>Our Aim</h2>
                    <div className={styles.aimItems}>
                        <div data-aos="fade-down" className={styles.aimItem}>
                            <img src={digiSkills}/>
                            <h3>Digital Skills & Training Program</h3>
                            <p>
                                Provide digital skills and training to our youth including but not limited to students, 
                                graduates, professionals and housewives.
                            </p>
                        </div>
                        <div data-aos="fade-down" className={styles.aimItem}>
                            <img src={bridgingGap}/>
                            <h3>Bridging Gap Between Academia & Industry</h3>
                            <p>
                                Bridge the gap between Academia and Industry by arranging seminars about latest 
                                Technological developments as well as helping students with their projects by providing 
                                external supervision.
                            </p>
                        </div>
                        <div data-aos="fade-down" className={styles.aimItem}>
                            <img src={Incubating}/>
                            <h3>Incubating Innovative Ideas & Mentoring</h3>
                            <p>
                                Incubate new ideas and start-ups. Guide founders in their entrepreneurial 
                                journey and provide grants / investments to promising start-ups.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aim
