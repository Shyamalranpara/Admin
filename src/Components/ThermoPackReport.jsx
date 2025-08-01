import { DatePicker } from 'antd'
import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './ThermoPackReport.css'

const ThermoPackReport = () => {
const { Search } = Input;

     const onSearch = (value) => {
    console.log('Searching:', value);
  };
  return (
    <div>
        <div className='main-report'>

        <div><h3>Thermopack Report</h3></div>

       <div className='second'>
         <div>
             <Search
      placeholder="search"
      allowClear
      enterButton={<SearchOutlined />}
      onSearch={onSearch}
      style={{ width: 200 }}
    />
        </div>

        <div>
            <div><DatePicker /></div>
        </div>

        <div>
            <button className='btn-org'>Add Hour</button>
        </div>
        
       </div>
        </div>
    </div>
  )
}

export default ThermoPackReport