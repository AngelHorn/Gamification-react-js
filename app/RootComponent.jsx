import React from 'react';
import {connect} from 'react-redux';
import {reduxReactRouter, routerStateReducer, ReduxRouter, pushState} from 'redux-router';
import {Link} from 'react-router';

//引入connect需要的映射方法
import {mapStateToProps, mapDispatchToProps} from './maptoProps.jsx';

//引入下级组件
import {FuckComponent} from './components/FuckComponent.jsx';

class RootComponent extends React.Component {
  render() {
    return (
      <div>
        <FuckComponent fuckState={this.props.fuckState} onFuckClick={this.props.onFuckClick}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
