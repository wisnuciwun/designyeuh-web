import React from 'react'
import { Image } from 'react-bootstrap'
import symbol from '../../public/logo/logo_symbol.png'
import logo_big from '../../public/logo/logo_big.png';


function About() {
    return (
        <div className="fadeIn-screen">
            <Image src={logo_big} style={{height: '130px', width: '360px'}} className="navbar-brand" id="logo"/><br/><br/>
            <h2>Hello World !</h2>

            <div className="d-flex justify-content-center">
            <p style={{width: '66%', textAlign: 'justify', textAlignLast: 'left'}}>
            DesignYEUH shares a lot of resume template and wallpapers.
            You could download them everytime and everywhere. All of our designs is just for FREE and absolutely NO COPYRIGHT.
            We recommend you to download designs only from our website directly. Make sure to Turn OFF the Ad-Blocker
            for keeping this website life and always provides you new designs for free.
            And yet, the official website is only one here. If you find some website that plagiarize our contents,
            please contact us.
            <br/>
            <br/>
            Also if you're generous designer, we pleasure if you wanted to share your design to us.
            So please contact us, we will make you our Contributors, and yes your name will shown here.
            </p>
            </div>
        </div>
    )
}

export default About
