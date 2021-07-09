import React from 'react';
import { Table } from 'antd';
import { Form, Row, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Column } = Table;

const Tecdoc  = () => { 
  return(
    <>
      <Form name="basicForm" >
        <Row>
          <Form.Item >
            <Button htmlType="button" icon={<PlusOutlined />} style={{ margin: '0 8px' }} onClick={() => alert("Ajout d'un profil")}>
                Ajouter un profil
            </Button>
          </Form.Item>
        </Row>
        <Row>
          <Table dataSource={undefined}>
            <Column title="ID" dataIndex="id" key="id" width={100} />
            <Column title="Compte" dataIndex="compte" key="compte" width={250} />
            <Column title="Nom" dataIndex="nom" key="nom" width={250} />
            <Column title="Uid" dataIndex="uid" key="uid" width={800} />
            <Column title="Etat" dataIndex="etat" key="etat" width={300} />
          </Table>
        </Row>
      </Form>
    </>
  );
};

export default Tecdoc;