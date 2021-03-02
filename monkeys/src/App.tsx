import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Babouin from './pages/babouin';
import Macaques from './pages/macaques';

import { DEFAULT_IMG } from './utils/constants';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/macaque">
                <Macaques img={DEFAULT_IMG} />
            </Route>
            <Route path="/babouin">
                <Babouin />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
