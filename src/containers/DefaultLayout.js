import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import { UserProvider } from '../helpers/UserContext'
import routes from '../routes'
import DefaultFooter from './DefaultFooter'
import DefaultHeader from './DefaultHeader'

class DefaultLayout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modalToggle: {
                toggle: false,
                type: ""
             }
        }
    }

    onClickModal = (val) => {
        this.setState({
            modalToggle: 
            {
                toggle: !this.state.modalToggle.toggle,
                type: val
            }}
        )
    }
    
    render() {
        return (
            <div>
                <UserProvider value={this.state.modalToggle}>
                    <DefaultHeader/>
                        <Container style={{minHeight: "300px"}} fluid className="App lg">
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (
                                            <route.component {...props} />
                                        )}
                                        />
                                    )
                                    :
                                    null
                                })
                                }
                                <Redirect from="/" to="/home" />
                            </Switch>
                        </Container>
                    <DefaultFooter {...this.props} toggle={this.onClickModal}/>
                </UserProvider>
            </div>
        )
    }
}

export default DefaultLayout
