import { Fragment } from 'react';
import './App.css';
import Navigation from './pages/navigation/Navigation';
import Resume from './pages/resume/Resume';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Resume />
      {/* <div>
        test
      </div> */}
    </Fragment>
  );
}

export default App;
