import React, { PropTypes } from 'react'
import { Modal, Button, Icon } from 'antd';


const QuestModalComponent = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false
    });
  },
  handleCancel() {
    this.setState({
      visible: false
    });
  },
  render() {
      return (
          <div>
              <Button type="ghost" size="large" onClick={this.showModal}>
                  <Icon type="plus" />
                  添加
              </Button>
              <Modal
                  title="添加任务"
                  width=""
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}>
                  <p>对话框的内容</p>
                  <p>对话框的内容</p>
                  <p>对话框的内容</p>
              </Modal>
          </div>
      )
  }
})
export default QuestModalComponent
