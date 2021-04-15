import React, { Component } from 'react'
import { ModalBody, Table } from 'reactstrap';
import TextIcons from '../../components/TextIcons';
import author from '../../public/logo/author.jpeg'

export default class Contacts extends Component {
    render() {
        return (
            <div className="fadeIn-screen">
                <h2>Contact</h2><br/><br/>
                    <div className="d-flex justify-content-center">
                        <tr>
                            <img src={author} alt="Avatar" style={{width: "280", height: "350px", borderRadius: "10px"}} className="center-cropped fadeIn-screen"/>
                        </tr>
                        <tr style={{marginLeft: "20px", textAlign: "left"}}>
                                <h3>WISNU ADI WARDHANA</h3>
                                <br/>
                                <i>'code is not that hard, unless you do'</i><br/>
                                <TextIcons text="State Polytechnic of Malang" icon="fas fa-user-graduate"/>
                                <TextIcons text="IT Programmer at PT. Global Service Indonesia" icon="fas fa-briefcase"/>
                                <TextIcons text="Delta Cakung Apartemen BLOK CA LT. 3 NO. 8, EAST JAKARTA" icon="fas fa-map-marker-alt"/>
                                <TextIcons text="designyeuh@gmail.com" icon="fas fa-envelope"/>
                                <TextIcons text="@wissnuawardhamn" icon="fab fa-instagram-square"/>
                        </tr>
                    </div>
            </div>
        )
    }
}
