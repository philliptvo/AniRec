import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';

import Anime from "./components/anime/AnimeList";
import AnimeDetail from "./components/anime/AnimeDetails";
import EditAnime from "./components/anime/EditAnime";

function App() {
  return (
    <div className="page-container">
      <div className="wrapper">
        <BrowserRouter>
          <div className="content">
            <Switch>
                <Route
                    exact
                    path={"/anime"}
                    component={Anime}>
                </Route>
                <Route
                    exact
                    path={"/anime/create"}
                    component={EditAnime}>
                </Route>
                <Route
                    exact
                    path={"/anime/edit/:id"}
                    component={EditAnime}>
                </Route>
                <Route
                    exact
                    path={"/anime/:animeId"}
                    component={AnimeDetail}>
                </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
