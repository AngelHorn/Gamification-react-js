import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';

import { Row, Col, Tabs, Icon, Button, Menu, DropdownButton } from 'antd';
const TabPane = Tabs.TabPane;

const ShopContainer = React.createClass({
    render () {
      const menu = <Button type="primary"><Icon type="plus" />添加物品</Button>
      const tabContent = [
        <span><Icon type="apple" />装备类</span>,
        <span><Icon type="android" />道具类</span>,
      ];
      return (
        <div>
          <Row type="flex" justify="center">
              <Col span="23">
                  <Tabs type="card" tabBarExtraContent={menu}>
                    <TabPane tab={tabContent[0]} key="1">
                      {this.props.items[0].name}
                    </TabPane>
                    <TabPane tab={tabContent[1]} key="2">
                      {this.props.items[1].name}
                    </TabPane>
                  </Tabs>
              </Col>
          </Row>
        </div>
      )
    }
})

function mapStateToProps(state) {
    let items = state.items;
    return {
        items
    }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer)
