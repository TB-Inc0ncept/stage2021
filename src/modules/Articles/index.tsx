import React from 'react';
import data from './IData';
import { Table, Space, Input } from 'antd';
import { Form, Row, Button } from 'antd';
import { SearchOutlined, FormOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Column } = Table;

const Articles = () => {
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
            <Column title="Référence" dataIndex="reference" key="reference" width={200} />
            <Column title="EAN" dataIndex="ean" key="ean" width={250} />
            <Column title="Libellé" dataIndex="libelle" key="libelle" width={400} />
            <Column title="Fabriquant" dataIndex="fabriquant" key="fabriquant" width={300} />
            <Column title="Etat" dataIndex="etat" key="etat" width={160} />
            <Column title="Mise à jour" dataIndex="miseajour" key="misajour" width={160} />
            <Column title="Création" dataIndex="creation" key="creation" width={160} />
            <Column title="" key="action" 
            render={() => (
              <a onClick={() => alert("Modification de la ligne")}> <FormOutlined /> </a>
            )}/>
          </Table>
        </Row>
      </Form>
    </>
  );
};

export default Articles;