import React from 'react';
import './Sidebar.css'
import { DownOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: (
      <a href="#" rel="noopener noreferrer">
        Thermopack Report
      </a>
    ),
    key: '0',
  },
];
const DropdownMenu = () => (
    <div className='dropdown'>
                <SettingOutlined/>
    
<Dropdown menu={{ items }} trigger={['click']}>

    <a onClick={e => e.preventDefault()}>
      <Space>
        Report
        <DownOutlined className='downicon' />
      </Space>
    </a>
  </Dropdown>
    </div>
  
);
export default DropdownMenu;