import "./App.css";

//Cấu hình router

import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
