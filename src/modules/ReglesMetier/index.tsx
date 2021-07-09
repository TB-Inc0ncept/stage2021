import React from 'react';
import { Button } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const ReglesMetier = () => {
  return (
    <div>
      <h3><u>Règles commandes</u></h3>
      <Button size="small" type="primary" icon={<SaveOutlined />} onClick={() => alert('Sauvegarde en cours')}>
        Sauvegarder
      </Button>
    </div>
  );
};

export default ReglesMetier;