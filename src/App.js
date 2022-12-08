import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Navigation from './pages/navigation/Navigation';
import Resume from './pages/resume/Resume';
import Welcome from './pages/welcome/Welcome';
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Route path='/'>
            <Redirect to='/welcome'/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
