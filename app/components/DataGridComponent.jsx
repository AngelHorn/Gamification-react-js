import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Table, Checkbox } from 'antd';
import { Row, Col, Input } from 'antd';

const columns = [{
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
    getInitialState () {

        //head高度与dataGrid的高度定义
        let height = document.body.offsetHeight
        let headerHeight = height * 0.2 +"px";
        let dataGridHeight = parseInt(height * 0.7) +"px";
        return {
            headerHeight,
            dataGridHeight
        }
    },
    handleKeyDown (e) {
        if(e.keyCode === 13){
            let text = this.refs.addQuest.refs.input.value.trim();
            if(text.length){
                this.props.onFetchAddQuest(text, 0)
            }else{}
            this.refs.addQuest.refs.input.value = ''
        } else {}
    },
    render () {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col span="23">
                        <Input ref="addQuest" size="large" placeholder="添加任务..."
                            onKeyDown={this.handleKeyDown} />
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
                        <Table className="dataGrid"
                            style={{overflowY:"auto",height:this.state.dataGridHeight,}}
                            rowSelection={{onSelect:(record, selected, selectedRows) => {
                                if(selected){
                                    this.props.onCompleteQuest(record.id);
                                }
                            }}}
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
