import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Anime from "./components/anime/anime";
import AnimeDetail from "./components/anime/anime_detail";

function App() {
  return (
    <div className="page-container">
      <div className="wrapper">
        <BrowserRouter>
          <div className="content">
            <Route
                exact={true}
                path={"/anime"}
                component={Anime}>
            </Route>
            <Route
                exact={true}
                path={"/anime/:animeId"}
                component={AnimeDetail}>
            </Route>

          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
