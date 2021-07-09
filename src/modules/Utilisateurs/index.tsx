import React from 'react';
import data from './IData';
import { Table, Space, Input } from 'antd';
import { Form, Row, Button } from 'antd';
import { SearchOutlined, FormOutlined } from '@ant-design/icons';

const { Column } = Table;

const Utilisateurs = () => {
  return (
    <>
      <Form name="basicForm" >
        <Row>
          <Space size={20}>
            <Form.Item>
              <Input placeholder="Rechercher" />
            </Form.Item>
            <Form.Item >
              <Button htmlType="button" type="primary" icon={<SearchOutlined />}>
                Rechercher
              </Button>
            </Form.Item>
          </Space>
        </Row>
        <Row>
          <Table dataSource={data}>
            <Column title="ID" dataIndex="id" key="id" width={100} />
            <Column title="Prénom" dataIndex="prenom" key="prenom" width={200} />
            <Column title="Nom" dataIndex="nom" key="nom" width={250} />
            <Column title="Email" dataIndex="email" key="email" width={300} />
            <Column title="Identifiant" dataIndex="identifiant" key="identifiant" width={300} />
            <Column title="Etat" dataIndex="etat" key="etat" width={160} />
            <Column title="Mise à jour" dataIndex="miseajour" key="misajour" width={160} />
            <Column title="Création" dataIndex="creation" key="creation" width={160} />
            <Column title="" key="action" 
            render={() => (
              <a onClick={() => alert("Modification de la ligne")}> <FormOutlined /> </a>
            )}
            />
          </Table>
          
        </Row>
      </Form>
    </>
  );
};

export default Utilisateurs;