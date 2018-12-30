import React, { Component } from 'react';

export default class Tile extends Component {

  getBackgroundStyle = () => {
    const mapId = this.props.mapId.params.id;
    const style = {
      backgroundImage: `url('../images/${mapId}.png')`,
      backgroundSize: '300px'
    }

    switch (this.props.status) {
      case 1:
        style.backgroundPosition = '0 0';
        break;
      case 2:
        style.backgroundPosition = '-100px 0';
        break;
      case 3:
        style.backgroundPosition = '-200px 0';
        break;
      case 4:
        style.backgroundPosition = '0 -100px';
        break;
      case 5:
        style.backgroundPosition = '-100px -100px';
        break;
      case 6:
        style.backgroundPosition = '-200px -100px';
        break;
      case 7:
        style.backgroundPosition = '0 -200px';
        break;
      case 8:
        style.backgroundPosition = '-100px -200px';
        break;
      default:
        if (this.props.won) {
          style.backgroundPosition = '-200px -200px';
        } else {
          style.backgroundImage = '';
        }
    }
    return style;
  }

  clickHandler = (e) => {
    this.props.tileClick(e.target, this.props.pos, this.props.status);
  }

  render() {
    return (
      <div className="tile" onClick={this.clickHandler} style={this.getBackgroundStyle()}>
        {/* {this.props.status} */}
      </div>
    )
  }
}