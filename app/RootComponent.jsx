import React from 'react';
import {connect} from 'react-redux';
import {reduxReactRouter, routerStateReducer, ReduxRouter, pushState} from 'redux-router';
import {Link} from 'react-router';

//引入connect需要的映射方法
import {mapStateToProps, mapDispatchToProps} from './maptoProps.jsx';

import {Row, Col} from "antd";

//引入下级组件
import HeaderComponent from './components/HeaderComponent.jsx';
import LeftNavComponent from './components/LeftNavComponent.jsx';
import DataGridComponent from './components/DataGridComponent.jsx';

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
                  <DataGridComponent/>
              </Col>
          </Row>
            
      </div>
    )
  }
}

export default RootComponent;
