import React, { PropTypes } from 'react';
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

const LeftNavComponent = React.createClass({
    getInitialState() {
        return {
          current: '1'
        }
    },
    handleClick(e) {
        if(e.key % 2){
            window.location.hash = 'fuck'
        }else{
            window.location.hash = '/'
        }
        this.setState({
          current: e.key
        });
    },
    render () {
        return (
            <Menu
                onClick={this.handleClick}
                style={{width:"auto"}}
                defaultOpenKeys={['sub1']}
                selectedKeys={[this.state.current]}
                mode="inline">
                <Menu.Item key="1"><Icon type="inbox" />收集箱</Menu.Item>
                <Menu.Item key="2"><Icon type="play-circle-o" />今日待办</Menu.Item>
                <Menu.Item key="3"><Icon type="star-o" />下一步行动</Menu.Item>
                <Menu.Item key="4"><Icon type="pause-circle-o" />等待中</Menu.Item>
                <Menu.Item key="5"><Icon type="calendar" />日程表</Menu.Item>
                <Menu.Item disabled={true}/>
                <Menu.Item key="6"><Icon type="check-circle-o" />已完成</Menu.Item>
                <Menu.Item key="7"><Icon type="delete" />回收箱</Menu.Item>
                    <Menu.Item disabled={true}/>

                <Menu.Item key="8"><Icon type="bars" />任务树</Menu.Item>
                    <Menu.Item disabled={true}/>

                <Menu.Item key="9"><Icon type="smile" />奖励池</Menu.Item>
                <Menu.Item key="10"><Icon type="shopping-cart" />道具池</Menu.Item>
                <Menu.Item key="11"><Icon type="bar-chart" />数据统计</Menu.Item>

            </Menu>
        )
    }
})

export default LeftNavComponent
