import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Aim from '../components/aim/Aim'
import Mentors from '../components/mentors/Mentors'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <About/>
            <Aim/>
            <Mentors/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
