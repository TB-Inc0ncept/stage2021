import Home from "../Home";
import Articles from "../Articles";
import Fabriquants from "../Fabriquants";
import Plateformes from "../Plateformes";
import Clients from "../Clients";
import Utilisateurs from '../Utilisateurs';
import Tecdoc from "../Tecdoc";
import Paramètres from "../Paramètres";
import MonitoringETL from "../MonitoringETL";
import PlanificateurDeTaches from "../PlanificateurDeTaches";
import ReglesMetier from "../ReglesMetier";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Menu() {
  return (
    
    <Router>
      <div>
        <nav>
          <p> ------------------------------- </p>
          <ul>
            <li>
              <Link to="/menu-test/home">Home</Link>
            </li>
            <li>
              <Link to="/menu-test/articles">Articles</Link>
            </li>
            <li>
              <Link to="/menu-test/fabriquants">Fabriquants</Link>
            </li>
            <li>
              <Link to="/menu-test/plateformes">Plateformes</Link>
            </li>
            <li>
              <Link to="/menu-test/clients">Clients</Link>
            </li>
            <li>
              <Link to="/menu-test/utilisateurs">Utilisateurs</Link>
            </li>
            <li>
              <Link to="/menu-test/tecdoc">Tecdoc</Link>
            </li>
            <li>
              <Link to="/menu-test/parametres">Paramètres</Link>
            </li>
            <li>
              <Link to="/menu-test/monitoring-etl">Monitoring ETL</Link>
            </li>
            <li>
              <Link to="/menu-test/planificateur-de-taches">Planificateur de Tâches</Link>
            </li>
            <li>
              <Link to="/menu-test/regles-metier">Règles Métier</Link>
            </li>
          </ul>
          <p> ------------------------------- </p>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/menu-test/articles">
            <Articles />
          </Route>
          <Route path="/menu-test/fabriquants">
            <Fabriquants />
          </Route>
          <Route path="/menu-test/plateformes">
            <Plateformes />
          </Route>
          <Route path="/menu-test/clients">
            <Clients />
          </Route>
          <Route path="/menu-test/utilisateurs">
            <Utilisateurs />
          </Route>
          <Route path="/menu-test/tecdoc">
            <Tecdoc />
          </Route>
          <Route path="/menu-test/parametres">
            <Paramètres />
          </Route>
          <Route path="/menu-test/monitoring-etl">
            <MonitoringETL />
          </Route>
          <Route path="/menu-test/planificateur-de-taches">
            <PlanificateurDeTaches />
          </Route>
          <Route path="/menu-test/regles-metier">
            <ReglesMetier />
          </Route>
          <Route path="/menu-test/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}