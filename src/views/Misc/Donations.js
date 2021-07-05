import React, { Component } from 'react'
import { ModalBody } from 'reactstrap';
import { API_URL_GET_DONATE } from '../../constants/Constants';
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
        await this.getPickData()
    }

    getPickData = async () => {
        await Axios.get(`${API_URL_GET_DONATE}`).then(res => {
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
                <img className="fadeIn-screen" alt={x.payment} src={x.imgLink} style={{width: '50%', maxHeight:'50%'}} />
            </td>)
        })

        return(
            // &nbsp; <i class="fas fa-coffee"></i>&nbsp;
            <div  className="fadeIn-screen" >
                <div style={{textAlign: "center"}} className="d-flex justify-content-center">
                    <p style={{width: '66%'}} >Our content will always be free for you, because we love to help people. But sometimes we thirsty, dude. A cup of coffe might help us a lot. Might one of these QR Code helps you to spend your excess money</p>
                </div>
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