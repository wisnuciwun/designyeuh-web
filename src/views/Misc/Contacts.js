import React, { Component } from 'react'
import { ModalBody, Table } from 'reactstrap';
import TextIcons from '../../components/TextIcons';
import author from '../../public/logo/author.jpeg'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <h2>Contact</h2><br/><br/>
                    <Table responsive className="d-flex justify-content-center">
                        <tr>
                            <img src={author} id="basic-nav-dropdown" alt="Avatar" className="person-img"/>
                        </tr>
                        <tr style={{marginLeft: "50px", textAlign: "left"}}>
                            <div>
                                <h3>WISNU ADI WARDHANA</h3>
                                <br/>
                                <i>'code is not that hard, unless you do'</i><br/>
                                <TextIcons text="State Polytechnic of Malang" icon="fas fa-user-graduate"/>
                                <TextIcons text="IT Programmer at PT. Global Service Indonesia" icon="fas fa-briefcase"/>
                                <TextIcons text="Delta Cakung Apartemen BLOK CA LT. 3 NO. 8, EAST JAKARTA" icon="fas fa-map-marker-alt"/>
                                <TextIcons text="designyeuh@gmail.com" icon="fas fa-envelope"/>
                                <TextIcons text="@wissnuawardhamn" icon="fab fa-instagram-square"/>
                            </div>
                        </tr>
                    </Table>
            </div>
        )
    }
}
