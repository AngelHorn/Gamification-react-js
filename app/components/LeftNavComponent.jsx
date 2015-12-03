import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'
import { Menu, Icon, Switch, Tag } from 'antd';
const SubMenu = Menu.SubMenu;

const LeftNavComponent = React.createClass({
    handleClick(e) {
        //router
        // console.log('handleClick');
        // window.location.href = '/#/'+e.key;
        // this.setState({
        //   current: e.key
        // });
    },
    handleMapNavType(navType){
        let hash;
        switch (this.props.current.navType) {
            case 0:
            hash = "inbox"
            break;
            case 2:
            hash = "next"
            break;
            case 3:
            hash = "waiting"
            break;
            case 5:
            hash = "done"
            break
            case 1:
            default:
            hash = "today"
        }
        return hash;
    },
    render () {
        return (
            <Menu
                style={{width:"auto"}}
                defaultOpenKeys={[]}
                selectedKeys={[this.handleMapNavType()]}
                mode="inline">
                <Menu.Item key="inbox">
                    <Link to="/inbox"><p><Icon type="inbox" />收集箱
                    <LeftNavComponentLengthSpan navKey="0" quests={this.props.quests}/></p></Link>
                </Menu.Item>
                <Menu.Item key="today">
                    <Link to="/today"><p><Icon type="play-circle-o" />今日待办
                        <LeftNavComponentLengthSpan navKey="1" quests={this.props.quests}/></p></Link>
                </Menu.Item>
                <Menu.Item key="next">
                    <Link to="/next"><p><Icon type="star-o" />下一步行动
                        <LeftNavComponentLengthSpan navKey="2" quests={this.props.quests}/></p></Link>
                </Menu.Item>
                <Menu.Item key="waiting">
                    <Link to="/waiting"><p><Icon type="pause-circle-o" />等待中
                        <LeftNavComponentLengthSpan navKey="3" quests={this.props.quests}/></p></Link>
                </Menu.Item>
                <Menu.Item key="schedule">
                    <Icon type="calendar" />日程表</Menu.Item>
                <Menu.Item disabled={true}/>
                <Menu.Item key="done">
                    <Link to="/done"><p><Icon type="check-circle-o" />已完成
                        <LeftNavComponentLengthSpan navKey="5" quests={this.props.quests}/></p></Link>
                </Menu.Item>
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

const LeftNavComponentLengthSpan = React.createClass({
    handleLength (key) {
        let navCount;
        switch (parseInt(key)) {
            case 5:
                navCount = this.props.quests.filter((quest) => {
                    if(quest.state === 1){
                        return quest
                    }
                });
                break;
            default:
                navCount = this.props.quests.filter((quest) => {
                    if(quest.type === parseInt(key) && quest.state === 0){
                        return quest
                    }
                });
        }
        return navCount.length;
    },
    render () {
        return (
            <span style={{float:"right"}}>{this.handleLength(this.props.navKey)}</span>
        )
    }
})


function mapStateToProps(state) {
  return {
      quests: state.quests,
      current: state.current
  }
}

function mapDispatchToProps(dispatch) {
  return {
    //onFlashData: () => dispatch(actions.fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavComponent)
