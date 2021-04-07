import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout';
import React from 'react';

function App(props) {
    const loading = () =>
    <div style={{fontSize: "20px", marginTop: "300px"}} className="loader center animated fadeIn pt-1 text-center">
      <i className="fa fa-cog fa-spin fa-2x" />&nbsp;Please wait...
    </div>

  return (
    <BrowserRouter>
      <div className="custom-body" style={{backgroundColor: 'white'}}>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" render={props => <Login {...props}/>} />
            <Route path="/" name="home" render={props => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
