import React, { Component } from 'react'
import About from './Misc/About'
import Contacts from './Misc/Contacts'
import Contributors from './Misc/Contributors'
import Disclaimer from './Misc/Disclaimer'
import Donations from './Misc/Donations'
import Terms from './Misc/Terms'

class Misc extends Component {

    render() {
        let states = this.props.location.state.chooseview
        return (
            <div>
            {
              {
                  'About': <About/>,
                  'Disclaimer': <Disclaimer/>,
                  'Donations': <Donations/>,
                  'Contacts': <Contacts/>,
                  'Terms & Conditions': <Terms/>,
                  'Contributors': <Contributors/>,
                  '': <About/>
              }[states]
            }
            </div>
        )
    }
}

export default Misc
