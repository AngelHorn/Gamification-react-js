import React, { PropTypes } from 'react'
import { Modal, Button, Icon, Upload } from 'antd';
// import { Form, Input, Col, Slider, InputNumber, Select, Datepicker, Timepicker} from 'antd';


const ItemModalComponent = React.createClass({
  getInitialState() {
    return {
        addButtonState: 'disabled',
        visible: false,
        loading: false,
        formData: {
          text: '',
          note: '',
          exp: 0,
          gold: 0,
          alert_at: '',
          deadline_at: ''
        }
     };
  },
  showModal() {
    this.setState({
      visible: true,
      formData: {...this.state.formData,
      }
    });
  },
  handleOk() {
    let formData = this.state.formData;
    let options = {};
    if(formData.note){
      options.note = formData.note;
    }
    if(formData.exp){
      options.exp = formData.exp;
    }
    if(formData.gold){
      options.gold = formData.gold;
    }
    if(formData.alert_at){
      options.alert_at = formData.alert_at;
    }
    if(formData.deadline_at){
      options.deadline_at = formData.deadline_at;
    }
    this.props.onFetchAddQuest(formData.text,formData.type,options);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 1000);
  },
  handleCancel() {
    this.setState({
      visible: false
    });
  },
  render() {
    const fuck_props = {
      name: "item_img",
      action: 'http://gamification.0x00000000.me/upload',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          console.log(info.file.response.data);
        } else if (info.file.status === 'error') {
        }
      }
    };
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}>
          <Icon type="plus" />
          添加物品
        </Button>
        <Modal
          title= "添加任务"
          width="800"
          visible={this.state.visible}
          confirmLoading={this.state.loading}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Upload {...fuck_props}>
            <Button type="ghost">
              <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          </Modal>
        </div>
        )
  }
})
export default ItemModalComponent
