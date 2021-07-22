import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Anime from "./components/anime/AnimeList";
import AnimeDetail from "./components/anime/AnimeDetails";

function App() {
  return (
    <div className="page-container">
      <div className="wrapper">
        <BrowserRouter>
          <div className="content">
            <Route
                exact path={"/anime"}
                component={Anime}>
            </Route>
            <Route
                exact path={"/anime/:animeId"}
                component={AnimeDetail}>
            </Route>

          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
