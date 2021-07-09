import PortalModule from "helmet-shell/es/components/Portal/PortalModule";

import { 
  AppstoreAddOutlined,
  HomeOutlined,
  MonitorOutlined,
  PullRequestOutlined,
  SettingOutlined,
  AndroidOutlined,
  FieldTimeOutlined
} from '@ant-design/icons';

import Home from "./Home";
import Articles from "./Articles"; 
import Articlesform from "./Articles/Articlesform";
import Fabriquants from "./Fabriquants"; 
import Fabriquantsform from "./Fabriquants/Fabriquantsform";
import Plateformes from "./Plateformes"; 
import Plateformesform from "./Plateformes/Plateformesform";
import Clients from "./Clients"; 
import Clientsform from "./Clients/Clientform";
import Utilisateurs from './Utilisateurs'; 
import Utilisateursform from "./Utilisateurs/Utilisateursform";
import Tecdoc from "./Tecdoc";
import Paramètres from "./Paramètres";
import MonitoringETL from "./MonitoringETL";
import PlanificateurDeTaches from "./PlanificateurDeTaches"; 
import Historique from "./PlanificateurDeTaches/historique";
import ReglesMetier from "./ReglesMetier";
import Test from "./Test";


const modules: PortalModule[] = [
  {
    name: ' Home',
    key: 'home',
    icon: <HomeOutlined />,
    translations: {},
    render: () => (<Home />)
  },

  {
    name: ' Liste Articles',
    key: 'articles',
    translations: {},
    render: () => (<Articles />)
  },

  {
    name: ' Formulaire',
    key: 'articlesform',
    translations: {},
    render: () => (<Articlesform />)
  },

  {
    name: ' Liste Fabriquants',
    key: 'fabriquants',
    translations: {},
    render: () => (<Fabriquants />)
  },

  {
    name: 'Formulaire',
    key: 'fabriquantsform',
    translations: {},
    render: () => (<Fabriquantsform />)
  },

  {
    name: ' Liste Plateformes',
    key: 'plateformes',
    translations: {},
    render: () => (<Plateformes />)
  },

  {
    name: ' Formulaire',
    key: 'plateformesform',
    translations: {},
    render: () => (<Plateformesform />)
  },

  {
    name: ' Liste Clients',
    key: 'clients',
    translations: {},
    render: () => (<Clients />)
  },

  {
    name: ' Formulaire',
    key: 'clientsform',
    translations: {},
    render: () => (<Clientsform />)
  },

  {
    name: ' Liste Utilisateurs',
    key: 'utilisateurs',
    translations: {},
    render: () => (<Utilisateurs />)
  },

  {
    name: ' Formulaire',
    key: 'utilisateursform',
    translations: {},
    render: () => (<Utilisateursform />)
  },

  {
    name: ' Tecdoc',
    key: 'tecdoc',
    icon: <AppstoreAddOutlined />,
    translations: {},
    render: () => (<Tecdoc />)
  },

  {
    name: ' Paramètres',
    key: 'paramètres',
    icon: <SettingOutlined />,
    translations: {},
    render: () => (<Paramètres />)
  },

  {
    name: ' Monitoring ETL',
    key: 'monitoringetl',
    icon: <MonitorOutlined />,
    translations: {},
    render: () => (<MonitoringETL />)
  },

  {
    name: 'Tâches Planifiées',
    key: 'tachesplanifiees',
    translations: {},
    render: () => (<PlanificateurDeTaches />)
  },

  {
    name: ' Historique',
    key: 'historique',
    translations: {},
    render: () => (<Historique />)
  },

  {
    name: ' Règles Métier',
    key: 'reglesmetier',
    icon: <PullRequestOutlined />,
    translations: {},
    render: () => (<ReglesMetier />)
  },

  {
    name: ' Test',
    key: 'test',
    icon: <AndroidOutlined />,
    translations: {},
    render: () => (<Test />)
  }
];

export default modules;