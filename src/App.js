import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';

import Header from './components/app/Header.js'
import Anime from './routes/anime'

function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="wrapper">
        <BrowserRouter>
          <div className="content">
            <Switch>
                <Route path="/anime" component={Anime} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
