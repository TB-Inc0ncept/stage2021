import React from 'react';
import { Table } from 'antd';
import { Form, Row, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Column } = Table;

const PlanificateurDeTaches = () => {
  return(
    <>
      <Form name="basicForm" >
        <Row>
          <Form.Item >
            <Button size="small" htmlType="button" icon={<PlusOutlined />} style={{ margin: '0 8px' }} onClick={() => alert("Ajout d'une tâche plannifiée")}>
            Ajouter une tâche plannifiée
            </Button>
          </Form.Item>
        </Row>
        <Row>
          <Table dataSource={undefined}>
            <Column title="ID" dataIndex="id" key="id" width={50} />
            <Column title="Nom de la tâche" dataIndex="nomdelatache" key="nomdelatache" width={250} />
            <Column title="Description" dataIndex="description" key="description" width={250} />
            <Column title="Actif" dataIndex="actif" key="actif" width={100} />
            <Column title="Arguments" dataIndex="arguments" key="arguments" width={400} />
            <Column title="Cron" dataIndex="cron" key="cron" width={200} />
            <Column title="Mise à jour" dataIndex="miseajour" key="miseajour" width={200} />
            <Column title="Création" dataIndex="creation" key="creation" width={250} />
          </Table>
        </Row>
      </Form>
    </>
  );
};
export default PlanificateurDeTaches;