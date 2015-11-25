import React, { PropTypes } from 'react';
import { Menu, Icon, Switch, Tag } from 'antd';
const SubMenu = Menu.SubMenu;

const LeftNavComponent = React.createClass({
    getInitialState() {
        return {
          current: window.location.hash.replace('#/','').split("?")[0]
        }
    },
    handleClick(e) {
        //router
        window.location.hash = e.key;
        this.setState({
          current: e.key
        });
    },
    render () {
        return (
            <Menu
                onClick={this.handleClick}
                style={{width:"auto"}}
                defaultOpenKeys={[]}
                selectedKeys={[this.state.current]}
                mode="inline">
                <Menu.Item key="inbox"><Icon type="inbox" />收集箱<span style={{float:"right"}}>10</span></Menu.Item>
                <Menu.Item key="today"><Icon type="play-circle-o" />今日待办<span style={{float:"right"}}>10</span></Menu.Item>
                <Menu.Item key="next"><Icon type="star-o" />下一步行动<span style={{float:"right"}}>10</span></Menu.Item>
                <Menu.Item key="waiting"><Icon type="pause-circle-o" />等待中<span style={{float:"right"}}>10</span></Menu.Item>
                <Menu.Item key="schedule"><Icon type="calendar" />日程表</Menu.Item>
                <Menu.Item disabled={true}/>
                <Menu.Item key="done"><Icon type="check-circle-o" />已完成</Menu.Item>
                <Menu.Item key="trash"><Icon type="delete" />回收箱</Menu.Item>
                    <Menu.Item disabled={true}/>

                <Menu.Item key="tree"><Icon type="bars" />任务树</Menu.Item>
                    <Menu.Item disabled={true}/>

                <Menu.Item key="9"><Icon type="smile" />奖励池</Menu.Item>
                <Menu.Item key="10"><Icon type="shopping-cart" />道具池</Menu.Item>
                <Menu.Item key="11"><Icon type="bar-chart" />数据统计</Menu.Item>

            </Menu>
        )
    }
})

export default LeftNavComponent
