import React, { PropTypes } from 'react'
import { Table, Checkbox } from 'antd';


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
    title: '姓名',
    dataIndex: 'name',
    render: function(text) {
        return <a href="javascript:;">
            {text}
        </a>;
    }
}];
const data = [{
  key: '1',
  name: '胡彦斌'
}, {
  key: '2',
  name: '胡彦祖'
}, {
  key: '3',
  name: '李大嘴'
}];

// 通过 rowSelection 对象表明需要行选择
const rowSelection = {
  type: "radio",
  getCheckboxProps: function(record) {
    return {
      defaultChecked: record.name === '李大嘴', // 配置默认勾选的列
      disabled: record.name === '胡彦祖'    // 配置无法勾选的列
    };
  },
  onSelect: function(record, selected, selectedRows) {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows) {
    console.log(selected, selectedRows);
  }
};

const DataGridComponent = React.createClass({
    render () {
        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                     />
            </div>
        )
    }
})





export default DataGridComponent
