import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/Index'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import GameLobby from './components/JoinGame';
import Game from './components/Game';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import SketchLogo from './components/SketchLogo';
import './pages/css/utilities.css';

class App extends React.Component { 
  render () {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/forgot-password' component={ForgotPassword} />
            <Route exact path='/game-lobby' component={GameLobby} />
            <Route path='/api/' />
            <Route path='*' component={Handle404} />
          </Switch>
        </div>
    </div>
    )
  }
}

const page404 = {
  color: "white",
}

class Handle404 extends React.Component {
  render() {
    return (
      <div className='container'>
        <SketchLogo />
        <h1 className='text-center font-weight-bold' style={page404}>
          Sorry, but the page you tried visiting doesn't exist!
        </h1>
      </div>
    )
  }
}

ReactDOM.render(
  (<BrowserRouter> 
    <App />
  </BrowserRouter>), document.getElementById('root')
);

registerServiceWorker();