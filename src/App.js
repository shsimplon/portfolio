/* eslint-disable no-undef */
import Home from "./components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Projects from "./components/Projects";
import Code from "./components/Code";
import { useContext } from "react";
import { ThemeStore } from "./components/ThemeContext";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useContext(ThemeStore)
  return (
    <div className={theme ? 'dark-theme' : 'light-theme'}>
    <BrowserRouter>
    
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>
        <Route path='/code' exact>
          <Code />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;