import React, { PropTypes } from 'react'
import { Table, Checkbox } from 'antd';
import { Row, Col, Input } from 'antd';

const columns = [{
    colSpan: 0,
    title:'选中',
    dataIndex: 'checkState',
    width: 30,
    render: function(key){
        return   <Checkbox key={key} defaultChecked={false} />
    }
},{
    colSpan:0,
    title: '任务文本',
    dataIndex: 'text',
    render: function(text) {
        return <a href="javascript:;">
            {text}
        </a>;
    }
}];

const DataGridComponent = React.createClass({
    getInitialState() {
        this.props.onFlashData();
        return {};
    },
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
                        <br/>
                        <hr/>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col span="23">
                        <Table
                            columns={columns}
                            dataSource={this.props.quests}
                            rowKey={(recode, index) => recode.id}
                            pagination={false}
                            />
                    </Col>
                </Row>

            </div>
        )
    }
})

export default DataGridComponent
