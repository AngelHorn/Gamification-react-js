import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Table, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Modal, Button, Icon, ButtonGroup  } from 'antd';
import { Form, Input, Slider, InputNumber, Select, DatePicker, Tag, Dropdown, Menu} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

const QuestMenuComponent = React.createClass({
  handleDeleteClick (){
    console.log(this.props);
    this.props.onFetchDeleteQuest(this.props.quest);
  },
  handleCopyClick () {
    console.log(this.props.quest.text);
  },
  render () {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a onClick={this.handleDeleteClick}>删除</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <a onClick={this.handleCopyClick}>复制标题</a>
        </Menu.Item>
      </Menu>
    );
    return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            <Icon type="setting" />
        </a>
      </Dropdown>
    )
  }
});

export default QuestMenuComponent
