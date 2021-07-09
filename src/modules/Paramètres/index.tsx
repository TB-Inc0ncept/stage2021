import React from 'react';
import { Table } from 'antd';
import data from './IData';
import { FormOutlined } from '@ant-design/icons';

const { Column } = Table;

const Paramètres  = () => { 
  return(
    <>
      <Table dataSource={data}>
        <Column title="ID" dataIndex="id" key="id" width={50} />
        <Column title="Paramètre" dataIndex="parametre" key="parametre" width={250} />
        <Column title="Valeur" dataIndex="valeur" key="valeur" width={1300} />
        <Column title="" key="action" 
        render={() => (
          <a onClick={() => alert("Modification de la ligne")}> <FormOutlined /> </a>
        )}
        />
      </Table>
    </>
  );
};

export default Paramètres;