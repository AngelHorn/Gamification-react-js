import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Table, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Modal, Button, Icon, ButtonGroup  } from 'antd';
import { Form, Input, Slider, InputNumber, Select, Datepicker, Timepicker, Tag} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

const DataGridComponent = React.createClass({
    mixins: [Form.ValueMixin],
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
            editModalLoading: false,
            formData: {
              text: '',
              note: '',
              exp: 0,
              gold: 0,
              type: this.props.current.navType.toString(),
              alert_at: '',
              deadline_at: ''
            }
        }
    },
    handleAddQuestEnterDown (e) {
        if(e.keyCode === 13){
            let text = this.refs.addQuest.refs.input.value.trim();
            if(text.length){
                this.props.onFetchAddQuest(text, this.props.current.navType)
            }else{}
            this.refs.addQuest.refs.input.value = ''
        } else {}
    },
    handleQuestClick (quest) {
      this.setState({
        editModalVisible: true,
        formData: {
          ...quest,
          type: quest.type.toString()
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
      this.props.onFetchAddSchedule( formData.text, formData.type, options );
      this.setState({ editModalLoading: true });
      setTimeout(() => {
        this.setState({ editModalLoading: false, editModalVisible: false });
      }, 1000);
    },
    handleCancel() {
      this.setState({
        editModalVisible: false
      });
    },
    handleDeadlineAtChange(from, value) {
      this.result = this.result || new Date();
      if (!value) {
          this.selectedDate = false;
      } else {
          this.result.setFullYear(value.getFullYear());
          this.result.setMonth(value.getMonth());
          this.result.setDate(value.getDate());
          this.selectedDate = true;
      }
      let deadline_at = '';
      if (this.selectedDate) {
        deadline_at += this.result.getFullYear() + "-"
        deadline_at += this.result.getMonth() + "-"
        deadline_at += this.result.getDate()
      }
      this.setState({
        formData: {
          ...this.state.formData,
          deadline_at
        }
      });
    },
    handleAlertAtChange(from, value) {
      this.result = this.result || new Date();
      if (!value) {
        if (from === 'date') {
          this.selectedDate = false;
        } else {
          this.selectedTime = false;
        }
      } else {
        if (from === 'date') {
          this.result.setFullYear(value.getFullYear());
          this.result.setMonth(value.getMonth());
          this.result.setDate(value.getDate());
          this.selectedDate = true;
        } else {
          this.result.setHours(value.getHours());
          this.result.setMinutes(value.getMinutes());
          this.selectedTime = true;
        }
      }

      let alert_at = '';
      if (this.selectedDate && this.selectedTime) {
        alert_at += this.result.getFullYear() + "-"
        alert_at += this.result.getMonth() + "-"
        alert_at += this.result.getDate() + " "
        alert_at += this.result.getHours() + ":"
        alert_at += this.result.getMinutes() + ":00"
      }
      this.setState({
        formData: {...this.state.formData,
          alert_at
        }
      });
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
                <Col span="2" style={{color:"#5E30B5"}}>
                  <Icon type="star-o" /> {quest.exp}
                </Col>
                <Col span="2" style={{color:"#FF6100"}}>
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
                <Modal
                    title= "编辑任务"
                    width="800"
                    visible={this.state.editModalVisible}
                    confirmLoading={this.state.editModalLoading}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <Form horizontal>
                        <FormItem>
                            <Input
                                type="textarea"
                                placeholder="任务标题"
                                name="text"
                                value={this.state.formData.text}
                                onChange={this.setValue.bind(this, 'text')} />
                        </FormItem>
                        <FormItem>
                            <Input
                                type="textarea"
                                placeholder="备注"
                                name="note"
                                value={this.state.formData.note}
                                onChange={this.setValue.bind(this, 'note')} />
                        </FormItem>
                        <FormItem
                            label="EXP："
                            labelCol={{span: 2}}
                            wrapperCol={{span: 16}}>
                            <div className="row">
                                <div className="col-20">
                                    <Slider
                                        min={0}
                                        max={100}
                                        step={null}
                                        marks={{0:"0",10:"10",20:"20",30:"30",40:"40",
                                          50:"50",60:"60",70:"70",80:"80",90:"90",100:"100"}}
                                        onChange={this.setValue.bind(this, 'exp')}
                                        value={this.state.formData.exp} />
                                </div>
                                <div className="col-4">
                                    <InputNumber
                                        min={0}
                                        max={900}
                                        step={10}
                                        style={{marginLeft: '16px'}}
                                        value={this.state.formData.exp}
                                        onChange={this.setValue.bind(this, 'exp')} />
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
                                        max={100}
                                        step={null}
                                        marks={{0:"$0",10:"$10",20:"$20",30:"$30",40:"$40",
                                          50:"$50",60:"$60",70:"$70",80:"$80",90:"$90",100:"$100"}}
                                        onChange={this.setValue.bind(this, 'gold')}
                                        value={this.state.formData.gold} />
                                </div>
                                <div className="col-4">
                                    <InputNumber
                                        min={0}
                                        max={900}
                                        step={10}
                                        style={{marginLeft: '16px'}}
                                        value={this.state.formData.gold}
                                        onChange={this.setValue.bind(this, 'gold')} />
                                </div>
                            </div>
                        </FormItem>
                        <FormItem
                            label="任务类型："
                            labelCol={{span: 2}}
                            wrapperCol={{span: 16}}>
                            <Select
                                value={this.state.formData.type}
                                onChange={this.setValue.bind(this, 'type')}
                                style={{width:120}}
                                name="type">
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
                                        value={this.state.formData.deadline_at || null}
                                        format="yyyy-MM-dd"
                                        onChange={this.handleDeadlineAtChange.bind(null, 'date')} />
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
                                        value={
                                          this.state.formData.alert_at ?
                                          this.state.formData.alert_at.split(" ")[0] : null
                                        }
                                        format="yyyy-MM-dd"
                                        onChange={this.handleAlertAtChange.bind(null, 'date')} />
                                </div>
                                <div className="col-6">
                                    <Timepicker
                                        defaultValue={
                                          this.state.formData.alert_at ?
                                          this.state.formData.alert_at.split(" ")[1] : null
                                        }
                                        format="HH:mm:ss"
                                        minuteOptions={[0, 15, 30 ,45]}
                                        onChange={this.handleAlertAtChange.bind(null, 'time')} />
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

export default DataGridComponent
