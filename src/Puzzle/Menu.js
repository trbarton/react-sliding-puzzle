import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Button = styled.button`
  margin: 0 5px;
  width: 92px;
`;

export default class Menu extends Component {

  clickHandler = () => {
    this.props.restart();
  }

  render() {
    return (
      <div id="menu">
        <h3 id="subtitle">{this.props.status}</h3>
        <Link to="/">
          <Button className="button">Menu</Button>
        </Link>
        <Button className={this.props.winClass} onClick={this.clickHandler}>Restart</Button>
      </div>
    )
  }
}