import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import FuckComponent from '../components/FuckComponent';
import { fuckClickAC } from "../actions/actionsCreators";

class FuckContainer extends React.Component {
    render() {
        return (
            <div>
    <FuckComponent {...this.props} />
</div>
        )
    }
}

function mapStateToProps(state){
  return {
    fuckState: state.fuckState,
    routerState: state.router
  }
}

function mapDispatchToProps(dispatch){
  return {
    onFuckClick: (text) => dispatch(fuckClickAC(text))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(FuckContainer)
