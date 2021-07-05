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
                                Here some my <i>specs</i> :<br/><br/>
                                <TextIcons text="State Polytechnic of Malang (2019)" icon={<i className="fas fa-user-graduate"></i>}/>
                                <TextIcons text="IT Programmer at PT. Global Service Indonesia" icon={<i className="fas fa-briefcase"></i>} />
                                <TextIcons text="Delta Cakung Apartemen Block CA Floor. 3 No. 8, East Jakarta" icon={<i className="fas fa-map-marker-alt"></i>}/>
                                <TextIcons text="designyeuh@gmail.com" icon={<i className="fas fa-envelope"></i>} />
                                <TextIcons text="@wissnuawardhamn" icon={<i className="fab fa-instagram-square"></i>}/>
                                <TextIcons text="wisnuciwun" icon={<i class="fab fa-github-square"></i>}/>
                                <br/>
                                Thanks for coming, you're really nice person ! 
                        </tr>
                    </div>
            </div>
        )
    }
}
