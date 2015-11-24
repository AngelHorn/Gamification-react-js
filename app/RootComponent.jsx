import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router'

//引入connect需要的映射方法
import {mapStateToProps, mapDispatchToProps} from './maptoProps.jsx';

import {Row, Col} from "antd";



class RootComponent extends React.Component {
  render() {
    return (
      <div>
          {this.props.header}
          <Row>
              <Col span="4">
                  {this.props.sidebar}
              </Col>
              <Col span="20">
                  {this.props.main}
              </Col>
          </Row>

      </div>
    )
  }
}

export default RootComponent;
