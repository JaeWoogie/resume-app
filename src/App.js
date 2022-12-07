import { Fragment } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Navigation from './pages/navigation/Navigation';
import Resume from './pages/resume/Resume';
import Welcome from './pages/welcome/Welcome';
import Introduction from './pages/know-me-better/Introduction'

function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/know-me-better'>
            <Introduction />
          </Route>
          <Route path='/'>
            <Redirect to='/welcome'/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
