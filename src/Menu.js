import React, {Component} from 'react';

export default class Menu extends Component {

  clickHandler = () => {
    this.props.restart();
  }

  render() {
    return (
      <div id="menu">
        <h3 id="subtitle">{this.props.status}</h3>
        <a className={this.props.winClass} onClick={this.clickHandler}>Restart</a>
      </div>
    )
  }
}