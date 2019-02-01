import React, {Component} from 'react';
import routers from "@/router";
import {Route, Link} from "react-router-dom";

import './index.scss'

class BasicLayout extends Component {

  render() {
    return (
      <div className='basic-layout-container'>
        <ul className='nav'>
          <li className='item'><Link to={'/'}>Home</Link></li>|
          <li className='item'><Link to={'/about'}>About</Link></li>
        </ul>
        {routers.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </div>
    )
  }
}

export default BasicLayout;
