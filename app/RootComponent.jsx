import React from 'react';
import {connect} from 'react-redux';
import {reduxReactRouter, routerStateReducer, ReduxRouter, pushState} from 'redux-router';
import {Link} from 'react-router';

//引入connect需要的映射方法
import {mapStateToProps, mapDispatchToProps} from './maptoProps.jsx';

//引入下级组件
import HeaderComponent from './components/HeaderComponent.jsx';

class RootComponent extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
      </div>
    )
  }
}

export default RootComponent;
