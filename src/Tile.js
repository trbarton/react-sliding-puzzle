import React, {Component} from 'react';

export default class Tile extends Component {

  constructor(props) {
    super(props)
  }

  clickHandler = (e) => {
    console.log(this.props);
    this.props.tileClick(e.target, this.props.pos, this.props.status);
  }

  render() {
    return (
      <div className="tile" onClick={this.clickHandler}>
        {this.props.status}
      </div>
    )
  }
}