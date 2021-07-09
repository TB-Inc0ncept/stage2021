import React from 'react';
import piechart from "../../images/piechart.png";
import chart1 from "../../images/chart1.png";
import chart2 from "../../images/chart2.png";
import { Row, Card } from 'antd';
import { SyncOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';

const Home = () => {
  return(
    <>
      <Row gutter={[48, 48]}>
          <Card size="small" cover={<img src={chart1}/>} headStyle={{ backgroundColor: '#D0D0D0' }} title="CA premier semestre 2019 " extra={<p>< SyncOutlined /> < SettingOutlined /> < DeleteOutlined /></p>} style={{ marginLeft: 30 }} bodyStyle={{ height: 200, padding: 200 }}/>
          
          <Card size="small" cover={<img src={chart1}/>} headStyle={{ backgroundColor: '#D0D0D0' }} title="CA deuxième semestre 2019" extra={<p>< SyncOutlined /> < SettingOutlined /> < DeleteOutlined /></p>} style={{ marginLeft: 20 }} bodyStyle={{ height: 200, padding: 200 }}/>
          
          <Card size="small" cover={<img src={piechart}/>} headStyle={{ backgroundColor: '#D0D0D0' }} title="Top 5 des clients" extra={<p>< SyncOutlined /> < SettingOutlined /> < DeleteOutlined /></p>} style={{ marginLeft: 20 }} bodyStyle={{ height: 200, padding: 200 }}/>

          <Card size="small" cover={<img src={chart2}/>} headStyle={{ backgroundColor: '#D0D0D0' }} title="Nombre commandes 2018-2019" extra={<p>< SyncOutlined /> < SettingOutlined /> < DeleteOutlined /></p>} style={{marginLeft: 20}} bodyStyle={{ height: 200, padding: 200 }}/>
      </Row>
  </>
  );
};

export default Home;