import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import { Row, Col, Input, Table, Icon} from 'antd';
import * as actions from '../actions/actionsCreators.jsx';
import DataGridComponent from '../components/DataGridComponent.jsx'



function dateCellRender(value) {
  return <div>自定义日数据</div>;
}

function monthCellRender(value) {
  return <div>自定义月数据</div>;
}

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
          render: (text, quest) => {
            return (
              <Row>
                <Col span="16">
                  <a
                    href="javascript:;"
                    onClick={() => this.handleQuestClick(quest)}>
                    {text}
                  </a>
                </Col>
                <Col span="2">
                  <Icon type="star-o" /> {quest.exp}
                </Col>
                <Col span="2">
                  $ {quest.gold}
                </Col>
              </Row>
            )
          }
      }];
      const rowSelection = {
        onSelect: (record, selected, selectedRows) => {
          if(selected){
            this.props.onCompleteQuest(record.id);
          } else {
            this.props.onCancelCompleteQuest(record.id);
          }
        },
        getCheckboxProps: (record) => {
          return {
            defaultChecked: record.state === 1, // 配置默认勾选的列
          }
        }
      };
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
                      rowSelection={rowSelection}
                      columns={columns}
                      dataSource={this.props.quests}
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
    // let quests = state.schedules.filter((schedule) => schedule.type === 4 && schedule.state === 0);
  // return {
  //     quests,
  //     current: state.current
  // }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchEditQuest: (quest) => dispatch(actions.fetchEditQuest(quest)),
    onFetchAddQuest: (text,type) => dispatch(actions.fetchAddQuest(text,type)),
    onCompleteQuest: (id) => dispatch(actions.completeQuest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer)
