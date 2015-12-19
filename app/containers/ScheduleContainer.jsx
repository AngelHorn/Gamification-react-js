import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import { Row, Col, Input, Table, Icon} from 'antd';
import { Modal, Button } from 'antd';
import { Form, Slider, InputNumber, Select, Datepicker, Timepicker} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

import * as actions from '../actions/actionsCreators.jsx';
import DataGridComponent from '../components/DataGridComponent.jsx'

const ScheduleContainer = React.createClass({
  getInitialState () {
      //数据驱动！！
      //head高度与dataGrid的高度定义
      let height = document.body.offsetHeight
      let headerHeight = height * 0.2 +"px";
      let dataGridHeight = parseInt(height * 0.7) +"px";
      return {
          headerHeight,
          dataGridHeight,
          editModalVisible: false,
          editModalLoading: false
      }
  },
    render () {
      const columns = [{
          colSpan: 0,
          title: '任务文本',
          dataIndex: 'text',
          render: (text, schedule) => {
            return (
              <Row>
                <Col span="16">
                  <a
                    href="javascript:;"
                    onClick={() => this.handleQuestClick(schedule)}>
                    {text}
                  </a>
                </Col>
                <Col span="2" style={{color:"#5E30B5"}}>
                  <Icon type="star-o" /> {schedule.exp}
                </Col>
                <Col span="2" style={{color:"#FF6100"}}>
                  $ {schedule.gold}
                </Col>
                <Col span="2" style={{color:"#01BAD2"}}>
                  <Icon type="tag-o" /> {function(){
                      switch (schedule.repeat_type) {
                        case 1:
                          return "单次"
                        case 2:
                          return "学习"
                        case 3:
                          return "每日"
                        case 4:
                          return "每周"
                        case 5:
                          return "每月"
                        case 6:
                          return "每年"
                        default:
                          return schedule.repeat_type
                      }
                  }()}
                </Col>
              </Row>
            )
          }
      }];
      return (
        <div>
          <Row type="flex" justify="center">
              <Col span="23">
                  <Input ref="addQuest" size="large" placeholder="添加任务..."
                      onKeyDown={this.handleAddQuestEnterDown} />
              </Col>
          </Row>
          <Row type="flex" justify="center">
              <Col span="23">
                  <br/>
                  <hr/>
              </Col>
          </Row>
          <Row type="flex" justify="center">
              <Col span="23">
                  <Table className="dataGrid"
                      style={{overflowY:"auto",height:this.state.dataGridHeight,}}
                      columns={columns}
                      dataSource={this.props.schedules}
                      rowKey={(recode, index) => recode.id}
                      pagination={false}
                      />
              </Col>
          </Row>
        </div>
      )
    }
})

function mapStateToProps(state) {
    let schedules = state.schedules;
  return {
      schedules,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchEditQuest: (quest) => dispatch(actions.fetchEditQuest(quest)),
    onFetchAddQuest: (text,type) => dispatch(actions.fetchAddQuest(text,type)),
    onCompleteQuest: (id) => dispatch(actions.completeQuest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer)
