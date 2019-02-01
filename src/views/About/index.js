import React, {Component} from 'react';
import {connect} from 'react-redux'
import {increase, decrease} from '../../store/actions/count'

@connect(state => {
  return {count: state.count};
}, {increase, decrease})
class About extends Component {

  add = () => {
    this.props.increase()
  }
  decrease = () => {
    this.props.decrease()
  }

  render() {
    return (
      <div className="about-wrapper">
        <h2>This is About page</h2>
        <p>{this.props.count}</p>
        <button onClick={this.decrease}>减</button>
        <button onClick={this.add}>加</button>
      </div>
    )
  }
}

export default About;
