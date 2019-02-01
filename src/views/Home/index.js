import React, {Component} from 'react';

import logo from "../../logo.svg";
import './index.scss'


class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <header>
          <img src={logo} className="logo" alt="logo"/>
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <a className="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default Home
