import React, { Component } from 'react'
import { ModalBody } from 'reactstrap';
import Axios from '../../helpers/axios';
import Executor from '../../helpers/Executor';

class Donations extends Component {

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
        await Axios.get(`donations`).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        let dataArray = []

        dataArray = this.state.data.map(x => {
            return (
            <td>
                <h3>{x.payment}</h3>
                <img className="center-cropped fadeIn-screen" alt={x.payment} src={x.imgLink} style={{width: '50%', height:'50%'}} />
            </td>)
        })

        return(
            <div className="fadeIn-screen">
                <p style={{textAlign: "center"}}>Our content will always be free for you, because we love to help people. But as an generic people, we still need some cup of &nbsp; <i class="fas fa-coffee fa-2x"></i><br/> So, might one of these QR Code helps you to spend your excess money ;D</p>
                <div className="d-flex justify-content-center">
                <tr>
                    {dataArray}
                </tr>
            </div>

            </div>
        )
    }
}

export default Donations