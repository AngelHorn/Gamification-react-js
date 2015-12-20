import React, { PropTypes } from 'react'
import { Menu, Icon, Switch } from 'antd';
import {Form, Input, Datepicker, Row, Col, Button, Progress, Tag} from "antd";
import QuestModalComponent from './QuestModalComponent.jsx';
import ScheduleModalComponent from './ScheduleModalComponent.jsx';
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const ProgressLine = Progress.Line;

const HeaderComponent = React.createClass({
    getInitialState() {
      return {
        date: ''
      };
    },
    handleChange(value) {
      message.info('您选择的日期是: ' + value.toString());
      this.setState({
        date: value
      });
    },
    render() {
        return (
            <header>
                <Row>
                    <Col span="4" style={{textAlign:"center"}}>
                        <a href="../..">
                            <img
                                width="60"
                                src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"/>
                        </a>
                    </Col>
                    <Col span="9">
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            theme=""
                            mode="horizontal">
                            <Menu.Item key="mail">
                                <QuestModalComponent {...this.props}/>
                            </Menu.Item>
                            <Menu.Item key="app">
                                <ScheduleModalComponent {...this.props}/>
                            </Menu.Item>
                            <Menu.Item>
                                <Row type="flex">
                                    <Col>
                                        <Icon type="search" />
                                    </Col>
                                    <Col>
                                        <Input placeholder="搜索..." />
                                    </Col>
                                </Row>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span="11">
                      <Row >
                        <Col span="2" type="flex" justify="end">
                            <Tag color="green" style={{fontSize:"12px"}}>
                              Lv.{parseInt(this.props.current.roleInfo.exp / 1000) + 1}
                            </Tag>
                        </Col>
                        <Col span="20">
                          <ProgressLine
                            percent={this.props.current.roleInfo.exp / 1000 * 100}
                            format="${percent}%"
                            status="active" />
                        </Col>
                      </Row>
                        <Row type="flex" justify="center">
                          <Col>
                            <Tag color="yellow" style={{fontSize:"12px"}}>
                              当日获得：{this.props.current.roleInfo.dayIncome}
                            </Tag>
                            <Tag color="red" style={{fontSize:"12px"}}>
                              当前存款：{this.props.current.roleInfo.balance}
                            </Tag>
                          </Col>
                        </Row>
                    </Col>
                </Row>
            </header>

        )
    }
})

export default HeaderComponent
