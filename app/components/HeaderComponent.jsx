import React, { PropTypes } from 'react'
import { Menu, Icon, Switch } from 'antd';
import {Form, Input, Datepicker, Row, Col, Button} from "antd";
import QuestModalComponent from './QuestModalComponent.jsx';
import ScheduleModalComponent from './ScheduleModalComponent.jsx';
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const InputGroup = Input.Group;

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
                    <Col span="16">
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
                            <SubMenu title={
                                    <span>
                                        <Icon type="setting" />
                                        导航 - 子菜单
                                    </span>
                                }>
                                <Menu.Item key="setting:1">选项1</Menu.Item>
                                <Menu.Item key="setting:2">选项2</Menu.Item>
                                <Menu.Item key="setting:3">选项3</Menu.Item>
                                <Menu.Item key="setting:4">选项4</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="http://www.alipay.com/" target="_blank">
                                    导航四 - 链接
                                </a>
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
                    <Col span="4">
                    </Col>
                </Row>
            </header>

        )
    }
})

export default HeaderComponent
