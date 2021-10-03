import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import AllTeams from './components/AllTeams/AllTeams';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Menubar from './components/Menubar/Menubar';
import Sports from './components/Sports/Sports';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/sports">
          <Sports></Sports>
        </Route>
        <Route path="/aboutUs">
          <AboutUs></AboutUs>

        </Route>
        <Route path="/contactUs">
          <ContactUs></ContactUs>

        </Route>
        <Route path="/team/:teamId">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
