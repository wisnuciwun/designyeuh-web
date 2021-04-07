import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Row } from 'reactstrap';
import Campaign from '../components/Campaign';
import symbol from '../public/logo/logo_symbol.png'
import MainModals from '../views/MainModals';
import reactlg from '../public/logo/react.png';
import freeddnslg from '../public/logo/freeddns.png';
import raspilg from '../public/logo/raspi.png';
import dotnetlg from '../public/logo/dotnet.png';

export default class DefaultFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             viewstate: ''
        }
    }
    

    onChangeViewMisc = (value) => {
        this.setState({
            viewstate: value
        }, () => {
            this.props.history.push({
                pathname: '/Misc',
                state: {
                    chooseview: this.state.viewstate
                  }
              })
        })

    }
    render() {
        return (
            <div className="footer text-white bg-danger">
                <Row>
                     <div className="col-2 align-self-center" style={{cursor: "pointer"}}>
                        <p onClick={() => this.onChangeViewMisc("About")}>About</p>
                        <p onClick={() => this.onChangeViewMisc("Disclaimer")}>Disclaimer</p>
                        {/* <p onClick={() => this.onChangeViewMisc("Terms")}>Terms and Conditions</p> */}
                        <p onClick={() => this.onChangeViewMisc("Donations")}>Donation</p>
                        <p onClick={() => this.onChangeViewMisc("Contacts")}>Contacts</p>
                        <p onClick={() => this.onChangeViewMisc("Contributors")}>Contributors</p>
                     </div>
                <div className="col-5 align-self-center" style={{fontSize: "11pt", opacity: "40%", textAlign: "center", textAlignLast: "justify"}}>
                    <Campaign/>
                </div>
                <div className="col-3 align-self-center" style={{textAlign: "center"}}>
                    <p>This website build with (not sponsored) :</p>
                    <span>
                        <img src={reactlg} alt="react logo" style={{width: "150px", height: "65px"}}/>&nbsp;&nbsp;
                        <img src={dotnetlg} alt="dotnet logo" style={{width: "50px", height: "50px"}}/>
                    </span>
                    <img src={raspilg} alt="raspberry pi logo" style={{width: "220px", height: "60px"}}/>
                    <img src={freeddnslg} alt="freeddns logo" style={{width: "220px", height: "40px", marginTop: "15px"}}/>
                </div>

                <div className="col-2 align-self-center">
                     <div className="rounded-circle z-depth-0 float-right" style={{textAlign: 'right', backgroundColor: 'white', padding: "20px"}}>
                         <Image src={symbol} style={{height: '130px', width: '130px'}}/>
                     </div>
                     <MainModals toggle={() => this.props.toggle("")}/>
                </div>

                </Row>

            </div>
        )
    }
}