import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import BasicLayout from '@/views/Layouts/BasicLayout'

import './common/scss/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <BasicLayout/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
