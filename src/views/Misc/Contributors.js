import React, { Component } from 'react'
import { Col, ModalBody } from 'reactstrap';
import Axios from '../../helpers/axios';
import Executor from '../../helpers/Executor';
import TextIcons from '../../components/TextIcons';
import { API_URL_GET_CONTRIBUTORS } from '../../constants/Constants';

class Contributors extends Component {

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
        await Axios.get(`${API_URL_GET_CONTRIBUTORS}`).then(res => {
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
               <td className="d-flex justify-content-between align-items-center">
                  <div>
                        <img className="center-cropped fadeIn-screen person-img" alt={x.payment} src={x.imgLink} />
                    </div>
                    <div style={{textAlign: "left", width: "100%"}}>
                        <h4>{x.name}</h4>
                        <TextIcons text={x.instagram} icon={<i className="fab fa-instagram-square"></i>} />
                        <TextIcons text={x.facebook} icon={<i className="fab fa-facebook"></i>} />
                        <TextIcons text={x.twitter} icon={<i className="fab fa-twitter"></i>} />
                        <TextIcons text={x.address} icon={<i className="fas fa-home"></i>} />
                    </div>
                </td>
                <br/>
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