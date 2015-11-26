import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router'

import {Row, Col} from "antd";
import HeaderComponent from './components/HeaderComponent.jsx';
import LeftNavComponent from './components/LeftNavComponent.jsx';


class RootComponent extends React.Component {
  render() {
    return (
      <div>
          <HeaderComponent/>
          <Row>
              <Col span="4">
                  <LeftNavComponent/>
              </Col>
              <Col span="20">
                  {this.props.children}
              </Col>
          </Row>

      </div>
    )
  }
}

export default RootComponent;
