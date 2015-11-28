import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';
import DataGridComponent from '../components/DataGridComponent.jsx'

const WaitingContainer = React.createClass({
    render () {
        return (
            <div>
                <DataGridComponent {...this.props} />
            </div>
        )
    }
})

function mapStateToProps(state) {
    let quests = state.quests.filter((quest)=>quest.type === 3);
  return {
      quests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // onFlashData: () => dispatch(actions.fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaitingContainer)
