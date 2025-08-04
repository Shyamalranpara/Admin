import React from 'react';
import { Table, Input } from 'antd';
import './Tablefiled.css';

const columns = [
  {
    title: 'Time',
    dataIndex: 'time',
    render: (text) => text,
  },
  {
    title: (
      <>
        Flue Gas Temp. <br />
        (Te-10-1)
      </>
    ),
    dataIndex: 'furnaceDraft',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: (
      <>
        Sand Level <br /> (Pt-5-4)
      </>
    ),
    dataIndex: 'sandLevel',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: (
      <>
        T.f Out Let Temp.  <br /> (Te-9-10)
      </>
    ),

    dataIndex: 'tfOut',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: (
      <>
        Ibh Inlet Let Temp.  (Te-9-1)
      </>
    ),
    dataIndex: 'ibhInlet',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: 'Delta',
    dataIndex: 'delta',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: (
      <>
        Bed Temp <br />  (Te-10-4)
      </>
    ),
    dataIndex: 'bedTemp',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: 'Fd Fan Air Temp',
    dataIndex: 'fdFanTemp',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: (
      <>
        Flue Gas Temp. <br />  (Te-10-1)
      </>
    ),
    dataIndex: 'flueGasTemp',
    render: () => <Input placeholder="Enter" />,
  },
  {
    title: 'Heat Output Load',
    dataIndex: 'heatOutput',
    render: () => <Input placeholder="Enter" />,
  },
];


const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
  '23:00', '00:00', '01:00', '02:00', '03:00',
  '04:00', '05:00', '06:00', '07:00',
];

const Tablefilled = () => {
  const data = timeSlots.map((time, index) => ({
    key: String(index + 1),
    time,
  }));
  return (
    <div className='main-table'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      // bordered
      // scroll={{ x: 'max-content' }}
      />
      <div>
        <button className='btn-save'>Add Hour</button>
      </div>
    </div>
  );
};

export default Tablefilled;
