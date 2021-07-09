import React from 'react';
import { Portal } from 'helmet-shell';
import { IntlProvider } from 'react-intl';
import 'antd/dist/antd.css';
import 'helmet-shell/dist/index.css';
import './App.css';
import { UserOutlined, CalendarOutlined, BarcodeOutlined, DeploymentUnitOutlined, ClusterOutlined, IdcardOutlined } from '@ant-design/icons';

import modules from './modules';
import { PortalMenuEntry, PortalMenuSubMenu } from 'helmet-shell/es/components/Portal/PortalMenu';

const menuItems: Array<PortalMenuEntry | PortalMenuSubMenu> = [
  {
    moduleKey: 'home'
  },
  {
    name: 'Articles',
    icon: <BarcodeOutlined />,
    children: [
      {
        moduleKey: 'articles',
      },
      {
        moduleKey: 'articlesform',
      }
    ]
    
  },
  {
    name: 'Fabriquants',
    icon: <DeploymentUnitOutlined />,
    children: [
      {
        moduleKey: 'fabriquants',
      },
      {
        moduleKey: 'fabriquantsform',
      }
    ]
    
  },
  {
    name: 'Plateformes',
    icon: <ClusterOutlined />,
    children:[
      {
        moduleKey: 'plateformes',
      },
      {
        moduleKey: 'plateformesform'
      }
    ]
    
  },
  {
    name: 'Clients',
    icon: <IdcardOutlined />,
    children: [
      {
        moduleKey: 'clients',
      },
      {
        moduleKey: 'clientsform',
      }
    ]
    
  },
  {
    name: 'Utilisateurs',
    icon: <UserOutlined />,
    children: [
      {
        moduleKey: 'utilisateurs',
      },
      {
        moduleKey: 'utilisateursform'
      }
    ]
    
  },
  {
    moduleKey: 'tecdoc',
  },
  {
    moduleKey: 'paramètres',
  },
  {
    moduleKey: 'monitoringetl',
  },
  {
    name: 'Planificateur de Tâches',
    icon: <CalendarOutlined />,
    children: [
      {
        moduleKey: 'tachesplanifiees',
      },
      {
        moduleKey: 'historique',
      },
    ]   
  },
  {
    moduleKey: 'reglesmetier',
  },
  {
    moduleKey: 'test',
  }
];

function App() {
  return (
    <IntlProvider locale="en">
      <Portal
        modules={modules}
        menuItems={menuItems}
        loginLogo={null}
        menuLogo={undefined}
        menuLogoCollapsed={undefined}
        logged={true}
        onLogin={(): void => {}}
        onLogout={(): void => {}}
      />
    </IntlProvider>
  );
}

export default App;
