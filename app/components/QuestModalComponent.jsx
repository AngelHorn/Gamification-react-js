import React, { PropTypes } from 'react'
import { Modal, Button, Icon } from 'antd';
import { Form, Input, Col, Slider, InputNumber, Select, Datepicker, Timepicker} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const OptGroup = Select.OptGroup;


const QuestModalComponent = React.createClass({
  getInitialState() {
    return {
        visible: false,
        exp: 4
     };
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
  onChange(value) {
      this.setState({
        exp: value
      });
  },
  handleChange(from, value) {
    this.result = this.result || new Date();
    if (!value) {
      if (from === 'date') {
        this.selectedDate = false;
      } else {
        this.selectedTime = false;
      }
      return;
    }
    if (from === 'date') {
      this.result.setFullYear(value.getFullYear());
      this.result.setMonth(value.getMonth());
      this.result.setDate(value.getDate());
      this.selectedDate = true;
    } else {
      this.result.setHours(value.getHours());
      this.result.setMinutes(value.getMinutes());
      this.result.setSeconds(value.getSeconds());
      this.selectedTime = true;
    }
    if (this.selectedDate && this.selectedTime) {
      console.log(this.result);
    }
  },
  render() {
      return (
          <div>
              <Button
                  type="ghost"
                  size="large"
                  onClick={this.showModal}>
                  <Icon type="plus" />
                  添加
              </Button>
              <Modal
                  title= "添加任务"
                  width="800"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}>
                  <Form horizontal>
                      <FormItem>
                          <Input
                              type="textarea"
                              placeholder="任务标题"
                              name="text" />
                      </FormItem>
                      <FormItem>
                          <Input
                              type="textarea"
                              placeholder="备注"
                              name="note" />
                      </FormItem>
                      <FormItem
                          label="EXP："
                          labelCol={{span: 2}}
                          wrapperCol={{span: 16}}>
                          <div className="row">
                              <div className="col-20">
                                  <Slider
                                      min={0}
                                      max={9}
                                      marks={[0,1,2,3,4,5,6,7,8,9]}
                                      onChange={this.onChange}
                                      value={this.state.exp} />
                              </div>
                              <div className="col-4">
                                  <InputNumber
                                      min={0}
                                      max={900}
                                      style={{marginLeft: '16px'}}
                                      value={this.state.exp}
                                      onChange={this.onChange} />
                              </div>
                          </div>
                      </FormItem>
                      <FormItem
                          label="GOLD："
                          labelCol={{span: 2}}
                          wrapperCol={{span: 16}}>
                          <div className="row">
                              <div className="col-20">
                                  <Slider
                                      min={0}
                                      max={9}
                                      marks={[0,1,2,3,4,5,6,7,8,9]}
                                      onChange={this.onChange}
                                      value={this.state.exp} />
                              </div>
                              <div className="col-4">
                                  <InputNumber
                                      min={0}
                                      max={900}
                                      style={{marginLeft: '16px'}}
                                      value={this.state.exp}
                                      onChange={this.onChange} />
                              </div>
                          </div>
                      </FormItem>
                      <FormItem
                          label="任务类型："
                          labelCol={{span: 2}}
                          wrapperCol={{span: 16}}>
                          <Select
                              defaultValue="1"
                              style={{width:120}}>
                              <Option value="1">今日待办</Option>
                              <Option value="2">下一步行动</Option>
                              <Option value="3">等待中</Option>
                              <Option value="0">收集箱</Option>
                          </Select>
                      </FormItem>
                      <FormItem
                          label="截止时间："
                          labelCol={{span: 2}}
                          wrapperCol={{span: 16}}>
                          <div className="row">
                              <div className="col-6">
                                  <Datepicker
                                      format="yyyy/MM/dd"
                                      onChange={this.handleChange.bind(null, 'date')} />
                              </div>
                              <div className="col-6">
                                  <Timepicker
                                      defaultValue="12:30:23"
                                      format="HH:mm"
                                      minuteOptions={[0, 15, 30 ,45]}
                                      onChange={this.handleChange.bind(null, 'time')} />
                              </div>
                          </div>
                      </FormItem>
                      <FormItem
                          label="提醒时间："
                          labelCol={{span: 2}}
                          wrapperCol={{span: 16}}>
                          <div className="row">
                              <div className="col-6">
                                  <Datepicker
                                      format="yyyy/MM/dd"
                                      onChange={this.handleChange.bind(null, 'date')} />
                              </div>
                              <div className="col-6">
                                  <Timepicker
                                      defaultValue="12:30:23"
                                      format="HH:mm"
                                      minuteOptions={[0, 15, 30 ,45]}
                                      onChange={this.handleChange.bind(null, 'time')} />
                              </div>
                          </div>
                      </FormItem>
                      <FormItem
                          label="爹任务："
                          labelCol={{span: 2}}
                          wrapperCol={{span: 16}}>
                          <Select
                              style={{width: '100%'}}
                              searchPlaceholder="选择爹任务"
                              tags
                              onChange={() => {}}>
                              <Option value="1">今日待办</Option>
                              <Option value="2">下一步行动</Option>
                              <Option value="3">等待中</Option>
                              <Option value="0">收集箱</Option>
                              <OptGroup label="四大根分类">
                                  <Option value="1">今日待办</Option>
                                  <Option value="2">下一步行动</Option>
                                  <Option value="3">等待中</Option>
                                  <Option value="0">收集箱</Option>
                              </OptGroup>
                          </Select>
                      </FormItem>
                  </Form>
              </Modal>
          </div>
      )
  }
})
export default QuestModalComponent
