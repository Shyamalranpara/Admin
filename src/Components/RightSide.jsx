import React,{ useState } from 'react'
import './Rightside.css'
import { Dropdown, Space, Avatar, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ProfileDropdown from './ProfileDropDown';
import Card from './Cards';
import ThermoPackReport from './ThermoPackReport';
import Tablefilled from './Tablefiled';
import { useNavigate } from 'react-router-dom';

const RightSide = () => {

  const navigate = useNavigate();
    
  return (
    <div className='Rightside-main'>
        <header className='header'>

            <div className='first'>
                <h4>JB rPET Industries Private Limited</h4>

            <div><ProfileDropdown/> </div>
           
            </div>
        <hr/>

    <div>
        <h4>
        Report /{' '}
        <span
          onClick={() => navigate('/thermopack-report')}
          style={{  cursor: 'pointer' }}
        >
          Thermopack Report
        </span>
      </h4>
    </div>
        </header>

{/* boxes  */}
       <div className='main-box'>
    
     <div style={{ display: 'flex', gap: '16px', padding: '20px' }}>

      <Card title="Chip Production" value="50" showAdd={false} />
      <Card title="Today's Coal Consumption" value="00" showAdd={true} />
      <Card title="Coal Consumption Per Ton (kg)" value="00" subval="Total Coal / Output" showAdd={false} />
      <Card title="Today's Coal Consumption" value="18,16,660" subval="Auto cout" showAdd={false} />
      <Card title="Today's Coal Consumption" value="75,694" subval="Total Load / Total Hours" showAdd={false} />
      <Card title="Today's Coal Consumption" value="1513.88" subval="Average Lead / Output" showAdd={false} />

    </div>
       </div>


       {/* report  */}

       <ThermoPackReport/>

       <Tablefilled/>
    </div>
  )
}

export default RightSide