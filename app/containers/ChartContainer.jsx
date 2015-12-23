import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';
import { LineChart ,BarChart} from 'react-d3';

const barData = [
  {
    "name": "Series A",
    "values": [{ "x": 1, "y":  91},{ "x": 2, "y":  11}]
  },
  {
    "name": "Series B",
     "values": [{ "x": 1, "y":  91},{ "x": 2, "y":  11}]
  }
];
const ChartContainer = React.createClass({
    render () {
      return (
        <div>
          <BarChart
  data={barData}
  width={500}
  height={400}
  zoom={2}
  title="Line Chart"
  yAxisLabel="Altitude"
  xAxisLabel="Elapsed Time (sec)"
  gridHorizontal={true}
  gridVertical={true}
  gridHorizontalStroke={'#000'}
  gridVerticalStrokeDash={'1, 0'}
/>
        </div>
      )
    }
})

function mapStateToProps(state) {
    let quests = state.quests.filter((quest) => quest.type === 0 && quest.state === 0);
  return {
      quests,
      current: state.current
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer)
