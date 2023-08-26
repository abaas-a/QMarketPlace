import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <div className="Content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/qurantracker"><Dashboard /></Route>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
