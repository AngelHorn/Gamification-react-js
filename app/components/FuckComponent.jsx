import React from 'react';
import {Link} from 'react-router';
const RaisedButton = require('material-ui/lib/raised-button');
export default class FuckComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.onFuckClick(this.props.fuckState)}>

          Hello world!!{this.props.fuckState}

          <Link to="/child">点我到儿子</Link>
        </h1>
        {this.props.children && React.cloneElement(this.props.children, {onFuckClick: this.props.onFuckClick, fuckState: this.props.fuckState})}
      </div>
    )
  }
}
