import React from 'react';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router'

import {Row, Col} from "antd";
import * as actions from './actions/actionsCreators.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import LeftNavComponent from './components/LeftNavComponent.jsx';


const RootComponent = React.createClass({
    getInitialState() {
        this.props.onFlashQuests();
        window.onhashchange = () => this.props.onPutCurrentNavType();
        return {};
    },
    render () {
        return (
            <div>
                <HeaderComponent/>
                <Row>
                    <Col span="4">
                        <LeftNavComponent {...this.props}/>
                    </Col>
                    <Col span="20">
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }
})

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onPutCurrentNavType: () => dispatch(actions.putCurrentNavType()),
    onFlashQuests: () => dispatch(actions.fetchQuests())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent)
