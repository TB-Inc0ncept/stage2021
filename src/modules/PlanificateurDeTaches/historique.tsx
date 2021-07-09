import React from 'react';
import { Table, Space } from 'antd';
import { Form, Row, Button, Select } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const { Column } = Table;

const Historique = () => {
  return(
    <>
      <Form name="basicForm" >
        <Row>
          <Space size={1021}>
            <Form.Item>
              <Select placeholder="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" />
            </Form.Item>
            <Form.Item >
              <Button htmlType="button" icon={<SyncOutlined />} style={{ margin: '0 8px' }} />
            </Form.Item>
          </Space>
        </Row>
        <Row>
          <Table dataSource={undefined}>
            <Column title="ID" dataIndex="id" key="id" width={150} />
            <Column title="Date de lancement" dataIndex="datedelancement" key="datedelancement" width={300} />
            <Column title="Tâche" dataIndex="tache" key="tache" width={300} />
            <Column title="Statut" dataIndex="statut" key="statut" width={300} />
            <Column title="Type" dataIndex="type" key="type" width={300} />
            <Column title="Pid" dataIndex="pid" key="pid" width={300} />
          </Table>
        </Row>
      </Form>
    </>
  );
};
export default Historique;