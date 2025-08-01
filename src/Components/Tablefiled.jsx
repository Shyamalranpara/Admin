import React from 'react';
import { Table } from 'antd';
import './Tablefiled.css';
const columns = [
  {
    title: 'Time',
    dataIndex: 'time',
  },
  {
    title: 'Furnace Draft (Dt-10-3)',
    dataIndex: 'furnaceDraft',
  },
  {
    title: 'Sand Level (Pt-5-4)',
    dataIndex: 'sandLevel',
  },
  {
    title: 'T.f Out Let Temp. (Te-9-10)',
    dataIndex: 'tfOut',
  },
  {
    title: 'Ibh Inlet Let Temp. (Te-9-1)',
    dataIndex: 'ibhInlet',
  },
  {
    title: 'Delta',
    dataIndex: 'delta',
  },
  {
    title: 'Bed Temp. (Te-10-4)',
    dataIndex: 'bedTemp',
  },
  {
    title: 'Fd Fan Air Temp',
    dataIndex: 'fdFanTemp',
  },
  {
    title: 'Flue Gas Temp. (Te-10-1)',
    dataIndex: 'flueGasTemp',
  },
  {
    title: 'Heat Output Load',
    dataIndex: 'heatOutput',
  },
];

const data = [
  {
    key: '0',
    time: '08:00',
  },
  {
    key: '1',
    time: '09:00',
  },{
    key: '2',
    time: '10:00',
  },{
    key: '3',
    time: '11:00',
  },{
    key: '4',
    time: '12:00',
  },{
    key: '5',
    time: '13:00',
  },{
    key: '6',
    time: '14:00',
  },
  {
    key: '7',
    time: '15:00',
  },{
    key: '8',
    time: '16:00',
  },{
    key: '9',
    time: '17:00',
  },{
    key: '10',
    time: '18:00',
  },{
    key: '11',
    time: '19:00',
  },{
    key: '12',
    time: '20:00',
  },{
    key: '13',
    time: '21:00',
  },
  {
    key: '14',
    time: '22:00',
  },{
    key: '15',
    time: '23:00',
  },{
    key: '16',
    time: '00:00',
  },{
    key: '17',
    time: '01:00',
  },
  {
    key: '18',
    time: '02:00',
    
  },{
    key: '19',
    time: '03:00',
  },{
    key: '20',
    time: '04:00',
  },{
    key: '21',
    time: '05:00',
  },{
    key: '22',
    time: '06:00',
  },
  {
    key: '23',
    time: '07:00',
  },
];

const Tablefilled = () => {
  return (
    <div className='main-table'>
    <Table
      columns={columns}
      dataSource={data} 
      pagination={false}
      // bordered
    />
    <div>
            <button className='btn-save'>Add Hour</button>
        </div>
        </div>
  );
};

export default Tablefilled;
