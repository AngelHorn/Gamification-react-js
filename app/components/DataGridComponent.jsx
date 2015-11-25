import React, { PropTypes } from 'react'
import { Table, Checkbox } from 'antd';
import { Row, Col, Input } from 'antd';
import request from 'superagent';
import { normalize, Schema, arrayOf } from 'normalizr';

const columns = [{
    colSpan: 0,
    title:'选中',
    dataIndex: 'key',
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
        this.handleAsyncRequest();
        return {};
        // let data = [];
        // let returnData = request
        // .get('/jsons/quests.json')
        // .end(function(err, res){
        //     let fuck = res.body.data;
        //     // let shit = normalize(fuck, {data: arrayOf(new Schema('data'))})
        //     data = normalize(fuck, arrayOf(new Schema('data')))
        //     console.log(data);
        //     return {data};
        // });
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
                            dataSource={[]}
                            pagination={false}
                            />
                    </Col>
                </Row>

            </div>
        )
    }
})





export default DataGridComponent
