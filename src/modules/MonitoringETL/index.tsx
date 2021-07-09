import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from './IData';
import { Table, Layout } from 'antd';

const { Column } = Table

class MonitoringETL extends PureComponent {
  render() {
    return (
      <Layout>
        <ResponsiveContainer width="100%" height="25%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="duration" stroke="#82ca9d" fill="#8884d8" fillOpacity={0.5} />
        </AreaChart>
      </ResponsiveContainer>
      <Table dataSource={data}>
        <Column title="ID" dataIndex="id" key="id" width={50} />
        <Column title="Date lancement" dataIndex="name" key="name" width={150} />
        <Column title="Message lancement" dataIndex="launch" key="launch" width={150} />
        <Column title="Date fin" dataIndex="name" key="name" width={150} />
        <Column title="Message fin" dataIndex="end_msg" key="end_msg" width={150} />
        <Column title="Durée" dataIndex="duree" key="duree" width={150} />
        <Column title="Nb lignes" dataIndex="nb_lignes" key="nb_lignes" width={50} />
        <Column title="Perf." dataIndex="perf" key="perf" width={50} />
      </Table>
      </Layout>
    );
  }
}

export default MonitoringETL