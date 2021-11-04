import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { Row } from 'reactstrap';
import Campaign from '../components/Campaign';
import symbol from '../public/logo/logo_symbol.png'
import MainModals from '../views/MainModals';

export default class DefaultFooter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             viewstate: '',
             miscs: ['About', 'Disclaimer', 'Donations', 'Contacts', 'Contributors', 'Terms & Conditions']
        }
    }

    onClickViewMisc = (value) => {
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
                     <div className="col-2 align-self-center" style={{cursor: "pointer", marginTop: '10px'}}>
                        {this.state.miscs.map((x, id) => {
                            return(<p key={id} onClick={() => this.onClickViewMisc(x)}>{x}</p>)})
                        }
                     </div>
                    <div className="col-5 align-self-center" style={{ opacity: "40%", textAlignLast: "justify", fontSize: "80%"}}>
                        <Campaign/>
                    </div>
                    <div className="col-3 align-self-center" style={{textAlign: "center"}}>
                        <span style={{fontSize: "100%"}} className="d-none d-lg-block" >
                            <h2 style={{textAlign: "right"}}><i className="fas fa-hamburger"></i>&nbsp;&nbsp;<b>Ingredients</b></h2>
                            <p style={{textAlign: "right"}}>
                                React JS<br/>
                                ASP.Net<br/>
                                MySQL<br/>
                                Express<br/>
                                IIS<br/>
                            </p>
                        </span>
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