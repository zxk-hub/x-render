/**
 * transform: true
 * defaultShowCode: false
 * background: 'rgb(245,245,245)'
 */

import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React, { useRef } from 'react';
import TableRender from 'table-render';
import request from 'umi-request';

const Demo = () => {
  const tableRef: any = useRef();

  // 配置完全透传antd table
  const columns = [
    {
      title: '酒店名称',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '酒店地址',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          酒店状态
          <Tooltip placement="top" title="使用valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '营业中',
        closed: '已打烊',
      },
      dataIndex: 'state',
    },
    {
      title: '酒店星级',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '酒店GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '操作',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('预订成功');
              }}
            >
              预订
            </div>
          </a>
        </Space>
      ),
    },
  ];

  return (
    <TableRender
      tableRef={tableRef}
      search={{
        hidden: true
      }}
      table={{
        columns,
        rowKey: 'id',
      }}
    />
  );
};

export default Demo;
