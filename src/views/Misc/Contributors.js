import React, { Component } from 'react'
import { Col, ModalBody } from 'reactstrap';
import Axios from '../../helpers/axios';
import Executor from '../../helpers/Executor';
import TextIcons from '../../components/TextIcons';

class Contributors extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }
    

    componentDidMount = async () => {
        await this.onPickData()
    }

    onPickData = async () => {
        await Axios.get(`contributors`).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        let dataArray = []

        dataArray = this.state.data.map(x => {
            return (
            <tr>
`               <td className="d-flex justify-content-between align-items-center">
`                   <div>
                        <img className="center-cropped fadeIn-screen person-img" alt={x.payment} src={x.imgLink} />
                    </div>
                    <div style={{textAlign: "left", width: "100%"}}>
                        <h4>{x.name}</h4>
                        <TextIcons text={x.instagram} icon="fab fa-instagram-square" />
                        <TextIcons text={x.facebook} icon="fab fa-facebook" />
                        <TextIcons text={x.twitter} icon="fab fa-twitter" />
                        <TextIcons text={x.creation} icon="fas fa-pencil-alt" />
                    </div>
                </td>
            </tr>
            )

        })

        return(
            <div className="fadeIn-screen" style={{overflowY: "scroll", maxHeight: "300px"}}>
                {dataArray}
            </div>
        )
    }
}

export default Contributors