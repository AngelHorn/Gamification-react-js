import React, { PropTypes } from 'react'
import { Row, Col, Input } from 'antd';
import DataGridComponent from '../components/DataGridComponent.jsx'

const InboxContainer = React.createClass({
    render () {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span="23">
                        <Input size="large" placeholder="添加任务..." />
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span="23">
                        <br/><hr/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                        <Col span="23">
                            <DataGridComponent/>
                        </Col>
                </Row>
            </div>
        )
    }
})

export default InboxContainer
