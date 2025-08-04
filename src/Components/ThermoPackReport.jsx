import { DatePicker } from 'antd'
import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './ThermoPackReport.css'
import { Checkbox } from 'antd';

const ThermoPackReport = () => {
const { Search } = Input;

     const onSearch = (value) => {
    console.log('Searching:', value);
  };

  const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
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
            <button className='border-btn'>TFH 1</button>
            <button className='border-btn-2'>TFH 2</button>
        </div>
        
       </div>
        </div>
        
        <div className='main-checkbox'>
          <div className='checkboxes'>
            <Checkbox onChange={onChange}>Wph Out Let Temp</Checkbox>
            <Checkbox onChange={onChange}>Esp Out Let Temp</Checkbox>
            <Checkbox onChange={onChange}>Id Fan Frequrncy(Hz)</Checkbox>
            <Checkbox onChange={onChange}>Id Fan Frequrncy/Load</Checkbox>
            <Checkbox onChange={onChange}>Screw Feeder Frequrncy(Hz)</Checkbox>
            <Checkbox onChange={onChange}>Heat Output Load</Checkbox>
          </div>

          <div>
            <a style={{color:"black"}} href="#">Edit</a>
          </div>
        </div>
    </div>
  )
}

export default ThermoPackReport