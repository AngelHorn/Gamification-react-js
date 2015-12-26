import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';

const ShopContainer = React.createClass({
    render () {
      return (
        <div>
          ShopContainer
        </div>
      )
    }
})

function mapStateToProps(state) {
    let quests = state.quests.filter((quest) => quest.state === 1);
  return {
      quests,
      current: state.current
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer)
