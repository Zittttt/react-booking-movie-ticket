import "./App.css";

//Cấu hình router

import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserTemplate from "./templates/UserTemplate/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/news" Component={News} />
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
