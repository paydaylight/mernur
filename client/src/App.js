import React from 'react';
import './App.css';
import './hooks/use_script'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './components/landing'
import Admin from './components/admin'

class App extends React.Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path={"/home"} component={Landing}/>
            <Route path={"/admin"} component={Admin}/>
            <Redirect exact from="/" to="/home" />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
