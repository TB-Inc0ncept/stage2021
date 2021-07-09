import React from 'react';
import data from './IData';
import { Table, Space, Input } from 'antd';
import { Form, Row, Button } from 'antd';
import { SearchOutlined, PlusOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';

const { Column } = Table;

const Clients = () => {
  return (
    <Form name="basicForm" >
      <Row>
        <Space size={20}>
          <Form.Item>
            <Input placeholder="Rechercher" />
          </Form.Item>
          <Space size={1180}>
            <Form.Item >
              <Button htmlType="button" type="primary" icon={<SearchOutlined />}>
                Rechercher
              </Button>
            </Form.Item>
            <Form.Item>
              <Button htmlType="button" icon={<PlusOutlined />} onClick={() => alert("Ajout d'un client")}>
                Ajouter un client
              </Button>
            </Form.Item>
          </Space>
        </Space>
      </Row>
      <Row>
        <Table dataSource={data}>
          <Column title="ID" dataIndex="id" key="id" width={100} />
          <Column title="Libellé" dataIndex="libelle" key="libelle" width={500} />
          <Column title="Siret" dataIndex="siret" key="Siret" width={420} />
          <Column title="Etat" dataIndex="etat" key="etat" width={250} />
          <Column title="Mise à jour" dataIndex="miseajour" key="misajour" width={160} />
          <Column title="Création" dataIndex="creation" key="creation" width={160} />
          <Column title="" key="action" 
          render={() => (
            <Space size="middle">
              <a onClick={() => alert("Modification de la ligne")}> <FormOutlined /> </a>
              <a onClick={() => alert("Suppression de la ligne")}> <DeleteOutlined /> </a>
            </Space>
          )}
          />
        </Table>      
      </Row>
    </Form>
  );
};

export default Clients;