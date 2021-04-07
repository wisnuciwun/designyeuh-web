import React from 'react'
import { Image } from 'react-bootstrap'
import symbol from '../../public/logo/logo_symbol.png'
import logo_big from '../../public/logo/logo_big.png';


function About() {
    return (
        <div>
            <Image src={symbol} style={{height: '100px', width: '100px'}}/>
            <Image src={logo_big} style={{height: '130px', width: '360px'}} className="navbar-brand" id="logo"/><br/><br/>
            <h2>Hello World !</h2><br/>

            <b>DesignYEUH</b> provides art designs such as resume, poster template and banner template for free.
            You can download everytime and everywhere all of our designs for <b>FREE</b> and absolutely <b>NO COPYRIGHT.</b>
            <br/>
            We recommend you to download designs from our website directly. Make sure to <b>Turn OFF the Ad-Blocker </b>
            for keeping this website life and always provides you new designs for free. 
            <br/>
            Author never pricing any items, so dont trust any other website that similiar to our website and request some payment to you,
            we noticed that is a <b>SCAM</b>. The official website is only one here. If you find some website that copy our official website content,
            please contact us.<br/><br/>
            Also if you're an designer, we pleasure if you wanted to share your design to this website. So please contact us, and we will put your contacts in our Author menu.
        </div>
    )
}

export default About
