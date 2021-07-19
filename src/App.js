import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Anime from "./components/anime/Anime";

function App() {
  return (
    <div className="page-container">
      <div className="wrapper">
        <BrowserRouter>
          <div className="content">
            <Route
                exact={true}
                path={"/anime/:title"}
                component={Anime}>
            </Route>

          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
