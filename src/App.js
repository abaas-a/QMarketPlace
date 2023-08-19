import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
