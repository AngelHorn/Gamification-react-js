import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';
import ItemModalComponent from '../components/ItemModalComponent.jsx';

import { Row, Col, Tabs, Icon, Button, Menu, DropdownButton, Collapse ,Tag } from 'antd';
const TabPane = Tabs.TabPane;
const Panel = Collapse.Panel;

const ShopContainer = React.createClass({
    render () {
      const tabContent = [
        <span><Icon type="apple" />装备类</span>,
        <span><Icon type="android" />道具类</span>,
      ];
      return (
        <div>
          <Row type="flex" justify="center">
            <Col span="23">
              <Tabs type="card" tabBarExtraContent={<ItemModalComponent/>}>
                <TabPane tab={tabContent[0]} key="1">
                  {this.props.items.map((item, index) =>
                    <Col span="12" key={index}>
                      <Row type="flex" justify="center">
                        <Col span="23">
                          <Collapse defaultActiveKey="1">
                            <Panel
                              header={item.name}
                              key="1">
                                <Tag color="green">{item.name} -  {item.price}</Tag>
                            </Panel>
                          </Collapse>
                        </Col>
                      </Row>
                    </Col>
                  )}
                </TabPane>
                <TabPane tab={tabContent[1]} key="2">
                  {this.props.items.map((item, index) =>
                    <Col span="12" key={index}>
                      <Row type="flex" justify="center">
                        <Col span="23">
                          <Collapse defaultActiveKey="1">
                            <Panel
                              header={item.name}
                              key="1">
                                <Tag color="green">{item.name} -  {item.price}</Tag>
                            </Panel>
                          </Collapse>
                        </Col>
                      </Row>
                    </Col>
                  )}
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
